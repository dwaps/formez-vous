import { Routes } from "@angular/router";
import { LoginComponent } from './pages/login/login.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { UserGuard } from './shared/guards/user.guard';


export const APP_ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'messages', canActivate: [UserGuard], component: MessagesComponent },
  { path: '**', component: LoginComponent },
];

