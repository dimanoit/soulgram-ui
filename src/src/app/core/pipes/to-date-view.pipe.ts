import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toDateView',
})
export class ToDateViewPipe implements PipeTransform {
  transform(value: Date): string {
    const transformed = this.getDateViewFormat(value);

    return transformed;
  }

  private getDateViewFormat(date: Date): string {
    const now = new Date();

    const milliseconds = +now - +date;
    const seconds = Math.round(milliseconds / 1000);
    if (seconds < 60) {
      return seconds + 'sec';
    }

    const minutes = Math.round(seconds / 60);
    if (minutes < 60) {
      return minutes + 'min';
    }

    const hours = Math.round(minutes / 60);
    if (hours < 24) {
      return hours + 'h';
    }

    const day = Math.round(hours / 24);
    if (day < 7) {
      return date + 'd';
    }

    if (day == 7) {
      return 'w';
    }

    return date.toLocaleDateString();
  }
}
