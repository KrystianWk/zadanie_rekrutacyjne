import { useEffect, useRef } from "react";

interface MoveScaleOptions {
  wrapperRef: React.RefObject<HTMLDivElement>;
  editableRef?: React.RefObject<HTMLDivElement | HTMLImageElement>;
}

const useMoveAndScale = ({ wrapperRef, editableRef }: MoveScaleOptions) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragHandleRef = useRef<HTMLDivElement>(null);
  const scaleHandleRef = useRef<HTMLDivElement>(null);

  const activeMode = useRef<"drag" | "scale" | null>(null);
  const dataStore = useRef({
    startX: 0,
    startY: 0,
    initialX: 0,
    initialY: 0,
    initWidth: 0,
    initHeight: 0,
  });

  const applyDrag = (
    box: HTMLDivElement,
    containerRect: DOMRect,
    e: MouseEvent
  ) => {
    const deltaX =
      e.clientX - dataStore.current.startX + dataStore.current.initialX;
    const deltaY =
      e.clientY - dataStore.current.startY + dataStore.current.initialY;

    const limitX = containerRect.width - box.offsetWidth;
    const limitY = containerRect.height - box.offsetHeight;

    box.style.left = `${Math.max(0, Math.min(deltaX, limitX))}px`;
    box.style.top = `${Math.max(0, Math.min(deltaY, limitY))}px`;
  };

  const applyScale = (
    box: HTMLDivElement,
    containerRect: DOMRect,
    e: MouseEvent,
    target?: HTMLDivElement | HTMLImageElement
  ) => {
    const newW =
      dataStore.current.initWidth + (e.clientX - dataStore.current.startX);
    const newH =
      dataStore.current.initHeight + (e.clientY - dataStore.current.startY);

    const clampedW = Math.max(
      50,
      Math.min(newW, containerRect.width - box.offsetLeft)
    );
    const clampedH = Math.max(
      50,
      Math.min(newH, containerRect.height - box.offsetTop)
    );

    box.style.width = `${clampedW}px`;
    box.style.height = `${clampedH}px`;

    if (target) {
      target.style.width = "100%";
      target.style.height = "100%";
    }
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const boxEl = containerRef.current;
    const editEl = editableRef?.current;
    const dragEl = dragHandleRef.current;
    const scaleEl = scaleHandleRef.current;

    if (!wrapper || !boxEl || !dragEl || !scaleEl) return;
    const wrapperRect = wrapper.getBoundingClientRect();

    const onMouseMove = (e: MouseEvent) => {
      if (!activeMode.current) return;
      if (activeMode.current === "drag") {
        applyDrag(boxEl, wrapperRect, e);
      } else if (activeMode.current === "scale") {
        if (editEl) {
          applyScale(boxEl, wrapperRect, e, editEl);
        }
      }
    };

    const onMouseUp = () => {
      activeMode.current = null;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      dataStore.current.initialX = boxEl.offsetLeft;
      dataStore.current.initialY = boxEl.offsetTop;
      dataStore.current.initWidth = boxEl.offsetWidth;
      dataStore.current.initHeight = boxEl.offsetHeight;
    };

    const startDrag = (e: MouseEvent) => {
      e.stopPropagation();
      activeMode.current = "drag";
      dataStore.current.startX = e.clientX;
      dataStore.current.startY = e.clientY;
      dataStore.current.initialX = boxEl.offsetLeft;
      dataStore.current.initialY = boxEl.offsetTop;
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };

    const startScale = (e: MouseEvent) => {
      e.stopPropagation();
      activeMode.current = "scale";
      dataStore.current.startX = e.clientX;
      dataStore.current.startY = e.clientY;
      dataStore.current.initWidth = boxEl.offsetWidth;
      dataStore.current.initHeight = boxEl.offsetHeight;
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };

    dragEl.addEventListener("mousedown", startDrag);
    scaleEl.addEventListener("mousedown", startScale);

    return () => {
      dragEl.removeEventListener("mousedown", startDrag);
      scaleEl.removeEventListener("mousedown", startScale);
    };
  }, [wrapperRef, editableRef]);

  return {
    containerRef,
    dragHandleRef,
    scaleHandleRef,
  };
};

export default useMoveAndScale;
