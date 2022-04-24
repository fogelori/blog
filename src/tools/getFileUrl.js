export function getFileUrl(text) {
  const filename = decodeURIComponent(text).split("/").pop().split("?").shift();
  return filename;
}
