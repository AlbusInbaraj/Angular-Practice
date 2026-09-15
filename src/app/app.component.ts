import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
// import { Day01CounterAppComponent } from './component/day01-counter-app/day01-counter-app.component';
// import { Day02ProfileEditorComponent } from './component/day02-data-binding/day02-profile-editor.component';
// import { UserListComponent } from './component/day03-component-communication/user-list/user-list.component';
// import { Day05CustomDirectiveComponent } from "./component/day05-custom-directive/day05-custom-directive.component";
// import { Day06CustomPipeComponent } from './component/day06-custom-pipe/day06-custom-pipe.component';
// import { StudentListComponent } from './component/day07-mini-project/student-list/student-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular 30_days Learning Concepts';
}
