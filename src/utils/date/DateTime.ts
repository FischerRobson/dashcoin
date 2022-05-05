/* eslint-disable no-mixed-operators */
/* eslint-disable no-param-reassign */
class DateTime {
  getNowDateTime(): string {
    const date = new Date();
    return date.toLocaleString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }

  formatSecondsToHoursMinutesSeconds(seconds: number): string {
    function pad(s: number) {
      return (s < 10 ? '0' : '') + s;
    }
    const hours = Math.floor(seconds / (60 * 60));
    const minutes = Math.floor(seconds % (60 * 60) / 60);
    seconds = Math.floor(seconds % 60);

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }
}

export const dateTime = new DateTime();
