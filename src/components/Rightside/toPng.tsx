import html2canvas from "html2canvas";

export async function exportToPng(
  element: HTMLDivElement | null,
  fileName: string = "poster.png"
) {
  if (!element) return;

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
  });

  const dataURL = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = dataURL;
  link.download = fileName;
  link.click();
}
