import { Component } from '@angular/core';
import { ReverseStringPipe } from '../../shared/pipes/reverse/reverse-string.pipe';
import { CommonModule, DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { EmployeeIdPipe } from '../../shared/pipes/employee/employee-id.pipe';

@Component({
  selector: 'app-day06-custom-pipe',
  imports: [ReverseStringPipe, UpperCasePipe, DatePipe, LowerCasePipe, TitleCasePipe, EmployeeIdPipe, CommonModule],
  standalone: true,
  templateUrl: './day06-custom-pipe.component.html',
  styleUrl: './day06-custom-pipe.component.scss'
})
export class Day06CustomPipeComponent {
  Birthday = new Date();

  today = new Date();

  rawId1 = 1;
  rawId2 = 1002;
  
  // employeeIds =;
}
