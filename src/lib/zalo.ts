import { siteConfig } from "@/data/config";

export function copyToClipboard(text: string): boolean {
  if (typeof window === "undefined") return false;

  // Modern clipboard API
  try {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
    }
  } catch {
    // continue to fallback
  }

  // Universal synchronous execCommand fallback (works in all iOS/Android WebViews)
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.width = "2em";
    textArea.style.height = "2em";
    textArea.style.padding = "0";
    textArea.style.border = "none";
    textArea.style.outline = "none";
    textArea.style.boxShadow = "none";
    textArea.style.background = "transparent";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand("copy");
    document.body.removeChild(textArea);
    return successful;
  } catch {
    return false;
  }
}

export function sendToZalo(text: string): void {
  if (typeof window === "undefined") return;

  // 1. Copy formatted booking details to clipboard
  copyToClipboard(text);

  // 2. Open Zalo chat immediately without async delay to prevent browser popup blocking
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (isMobile) {
    window.location.href = siteConfig.zalo;
  } else {
    window.open(siteConfig.zalo, "_blank", "noopener,noreferrer");
  }
}
