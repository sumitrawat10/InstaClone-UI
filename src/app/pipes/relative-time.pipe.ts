import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeTime',
})
export class RelativeTimePipe implements PipeTransform {
  transform(value: Date): string {
    if (!value) return '';

    const secondsElapsed = Math.floor((+new Date() - +new Date(value)) / 1000);

    if (secondsElapsed <= 30) return 'Just now';

    const intervals = {
      year: 31536000,
      mon: 2592000,
      w: 604800,
      d: 86400,
      h: 3600,
      m: 60,
      s: 1,
    };

    let counter: number;
    for (const [intervalName, intervalSec] of Object.entries(intervals)) {
      counter = Math.floor(secondsElapsed / intervalSec);
      if (counter <= 0) continue;
      return `${counter}${intervalName}`;
    }

    return '';
  }
}
