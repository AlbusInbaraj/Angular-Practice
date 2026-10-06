import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { Subscription } from 'rxjs';
import { CartService } from './services/cart/cart.service';
import { ProductComponent } from './component/product/product.component';
// import { Day08LoginTemplateDrivenFormComponent } from './component/day08-login-template-driven-form/day08-login-template-driven-form.component';
// import { RegisterReactiveformComponent } from './component/register-reactiveform/register-reactiveform.component';
// import { PostListHttpclientComponent } from './component/day19-post-list-httpclient/post-list-httpclient.component';
// import { SearchBarObservablesComponent } from './component/search-bar-observables/search-bar-observables.component';
// import { Day01CounterAppComponent } from './component/day01-counter-app/day01-counter-app.component';
// import { Day02ProfileEditorComponent } from './component/day02-data-binding/day02-profile-editor.component';
// import { UserListComponent } from './component/day03-component-communication/user-list/user-list.component';
// import { Day05CustomDirectiveComponent } from "./component/day05-custom-directive/day05-custom-directive.component";
// import { Day06CustomPipeComponent } from './component/day06-custom-pipe/day06-custom-pipe.component';
// import { StudentListComponent } from './component/day07-mini-project/student-list/student-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Angular 30_days Learning Concepts';
  itemCount: number = 0;
  private sub!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.sub = this.cartService.cartCount$.subscribe(count => {
      this.itemCount = count;
    });
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }
}
