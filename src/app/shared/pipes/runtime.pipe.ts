import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'runtime',
  standalone: true
})
export class RuntimePipe implements PipeTransform {
  transform(value: string | undefined): string {
    if (!value || value === 'N/A') return 'N/A';

    // OMDb returns "120 min". This extracts the number.
    const totalMinutes = parseInt(value.replace(' min', ''), 10);
    if (isNaN(totalMinutes)) return value;

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
  }
}
