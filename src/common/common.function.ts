export function randomId() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
export function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

export function randomInt0to10() {
  return Math.floor(Math.random() * 10);
}
