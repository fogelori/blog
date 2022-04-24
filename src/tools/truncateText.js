import { getFileUrl } from "./getFileUrl";

export function truncateText(text) {
  if (text.length > 15) {
    const filename = getFileUrl(text);
    const truncatedText = filename.substr(0, 15);
    return truncatedText + "...";
  }
  return text;
}
