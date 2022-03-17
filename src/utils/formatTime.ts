/* eslint-disable no-mixed-operators */
/* eslint-disable no-param-reassign */
export function formatTime(seconds: number) {
  function pad(s: number) {
    return (s < 10 ? '0' : '') + s;
  }
  const hours = Math.floor(seconds / (60 * 60));
  const minutes = Math.floor(seconds % (60 * 60) / 60);
  seconds = Math.floor(seconds % 60);

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}
