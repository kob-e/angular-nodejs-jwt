import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizCreateComponent } from './components/quiz/quiz-create/quiz-create.component';
import { LoginComponent } from './components/user/login/login.component';
import { LoggedGuard } from './guards/logged.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent  },
  { path: 'quiz', component: QuizCreateComponent, canActivate: [LoggedGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
