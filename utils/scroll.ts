export const handleScrollDown = ({
  event,
  callback,
}: {
  event: WheelEvent;
  callback: () => void;
}) => {
  if (event.deltaY > 0) {
    callback();
  }
};

export const handleScrollUp = ({
  event,
  callback,
}: {
  event: WheelEvent;
  callback: () => void;
}) => {
  if (event.deltaY < 0) {
    callback();
  }
};
