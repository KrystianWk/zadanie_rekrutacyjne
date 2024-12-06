import { useEffect, useRef } from "react";

const useCustomizeObject = ({
  containerRef,
  imageRef,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
  imageRef?: React.RefObject<HTMLDivElement | HTMLImageElement>;
}) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const moveButtonRef = useRef<HTMLDivElement>(null);
  const resizeButtonRef = useRef<HTMLDivElement>(null);

  const isMoving = useRef(false);
  const isResizing = useRef(false);

  const cords = useRef({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
    startWidth: 0,
    startHeight: 0,
  });

  useEffect(() => {
    const container = containerRef.current;
    const box = boxRef.current;
    const target = imageRef?.current;
    const moveButton = moveButtonRef.current;
    const resizeButton = resizeButtonRef.current;

    if (!container || !box || !moveButton || !resizeButton) return;

    const containerRect = container.getBoundingClientRect();

    const handleMouseDownMove = (e: MouseEvent) => {
      e.stopPropagation();
      isMoving.current = true;
      cords.current.startX = e.clientX;
      cords.current.startY = e.clientY;
    };

    const handleMouseDownResize = (e: MouseEvent) => {
      e.stopPropagation();
      isResizing.current = true;
      cords.current.startX = e.clientX;
      cords.current.startY = e.clientY;
      cords.current.startWidth = box.offsetWidth;
      cords.current.startHeight = box.offsetHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isMoving.current && box) {
        const nextX = e.clientX - cords.current.startX + cords.current.lastX;
        const nextY = e.clientY - cords.current.startY + cords.current.lastY;

        const maxX = containerRect.width - box.offsetWidth;
        const maxY = containerRect.height - box.offsetHeight;

        box.style.top = `${Math.max(0, Math.min(nextY, maxY))}px`;
        box.style.left = `${Math.max(0, Math.min(nextX, maxX))}px`;
      }

      if (isResizing.current && box) {
        const newWidth =
          cords.current.startWidth + (e.clientX - cords.current.startX);
        const newHeight =
          cords.current.startHeight + (e.clientY - cords.current.startY);

        const clampedWidth = Math.max(
          50,
          Math.min(newWidth, containerRect.width - box.offsetLeft)
        );
        const clampedHeight = Math.max(
          50,
          Math.min(newHeight, containerRect.height - box.offsetTop)
        );

        box.style.width = `${clampedWidth}px`;
        box.style.height = `${clampedHeight}px`;

        if (target) {
          target.style.width = "100%";
          target.style.height = "100%";
        }
      }
    };

    const handleMouseUp = () => {
      if (box) {
        isMoving.current = false;
        isResizing.current = false;
        cords.current.lastX = box.offsetLeft;
        cords.current.lastY = box.offsetTop;
        cords.current.startWidth = box.offsetWidth;
        cords.current.startHeight = box.offsetHeight;
      }
    };

    moveButton.addEventListener("mousedown", handleMouseDownMove);
    resizeButton.addEventListener("mousedown", handleMouseDownResize);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      moveButton.removeEventListener("mousedown", handleMouseDownMove);
      resizeButton.removeEventListener("mousedown", handleMouseDownResize);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [containerRef, imageRef]);

  return {
    boxRef,
    moveButtonRef,
    resizeButtonRef,
  };
};

export default useCustomizeObject;
