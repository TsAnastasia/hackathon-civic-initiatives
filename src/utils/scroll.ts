export const scrollOnWheel = (event: React.WheelEvent) => {
  event.currentTarget.scrollLeft += event.deltaY;
};
