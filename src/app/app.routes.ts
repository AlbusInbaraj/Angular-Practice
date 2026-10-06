import { RouterOutlet, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { UserListComponent } from './component/day03-component-communication/user-list/user-list.component';
import { TodoListComponent } from './component/day04-directives_todo_app/todo-list/todo-list.component';
import { HomeComponent } from './shared/components/home/home.component';
import { AboutComponent } from './shared/components/about/about.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { ProfileComponent } from './shared/components/profile/profile.component';
import { authGuard } from './core/guards/auth/auth.guard';
import { Day08LoginTemplateDrivenFormComponent } from './component/day08-login-template-driven-form/day08-login-template-driven-form.component';


export const routes: Routes = [
    { path: 'login', component: Day08LoginTemplateDrivenFormComponent },
    { path: '', component: HomeComponent, canActivate: [authGuard],
        children: [
            { path: 'about', component: AboutComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'profile', component: ProfileComponent },
            { path: '', redirectTo: '', pathMatch: 'full' }            
        ]
    }, // Default path
    { path: 'user', component: UserListComponent }, // Static path
    { path: 'todo', component: TodoListComponent }, 
    { path: '**', component: NotFoundComponent } // Wildcard fallback for errors
];
