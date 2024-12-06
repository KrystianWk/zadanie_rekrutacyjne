import html2canvas from "html2canvas";

export async function exportToPng(
  element: HTMLDivElement | null,
  fileName: string = "poster.png"
) {
  if (!element) return;

  const originalWidth = 759;
  const originalHeight = 948;

  const targetWidth = 1080;
  const targetHeight = 1350;

  const scaleX = targetWidth / originalWidth;
  const scaleY = targetHeight / originalHeight;

  const scale = Math.min(scaleX, scaleY);

  const canvas = await html2canvas(element, {
    scale: scale,
    useCORS: true,
    allowTaint: true,
  });

  const dataURL = canvas.toDataURL("image/png");

  const link = document.createElement("a");
  link.href = dataURL;
  link.download = fileName;
  link.click();
}
