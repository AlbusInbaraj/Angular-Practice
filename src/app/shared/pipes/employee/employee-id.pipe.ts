import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeId',
  standalone: true // Use for modern angular version 14 and above
})
export class EmployeeIdPipe implements PipeTransform {

  transform(value: number | string | null | undefined): string {
    if (value == null || value === undefined || value === '') {
      return '';
    }

    // Convert input to the string and remove any whitespace
    const cleanValue = value.toString().trim();

    // Pad the value with 4 digits (e.g., 1 becomes 0001, 23 becomes 0023)
    const paddedValue = cleanValue.padStart(4, '0');

    // Return the formatted employee ID with the prefix "EMP-"
    return `EMP-${paddedValue}`;
  }

}
