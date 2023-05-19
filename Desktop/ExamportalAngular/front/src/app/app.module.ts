import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { authInterceptorProviders } from './service/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
// import { UserDashbaordComponent } from './pages/user/user-dashbaord/user-dashbaord.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import {MatTableModule} from '@angular/material/table';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestonsComponent } from './pages/admin/view-quiz-questons/view-quiz-questons.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UpdateCategoryComponent } from './pages/admin/update-category/update-category.component';
import { UserDashbaordComponent } from './pages/user/user-dashbaord/user-dashbaord.component';
import { SidebarUserComponent } from './pages/user/sidebar-user/sidebar-user.component';
import { ProfileUserComponent } from './pages/user/profile-user/profile-user.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { NgxUiLoaderHttpModule } from "ngx-ui-loader";
import { UsersComponent } from './pages/admin/users/users.component';
import {MatIconModule} from '@angular/material/icon';
import { QuizCategoryComponent } from './pages/admin/quiz-category/quiz-category.component';
import { ViewHistoryComponent } from './pages/user/view-history/view-history.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { PaginationComponent } from './pages/admin/pagination/pagination.component';
// import { ViewhistoryComponent } from './pages/user/viewhistory/viewhistory.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { UpdateuserComponent } from './pages/admin/updateuser/updateuser.component';
import { ResultComponent } from './pages/user/result/result.component';
import { ConfirmMailComponent } from './pages/confirm-mail/confirm-mail.component';
import { ForgotformComponent } from './pages/forgotform/forgotform.component';
import { NextmailComponent } from './pages/nextmail/nextmail.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    ViewQuizzesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuizQuestonsComponent,
    AddQuestionComponent,
    UpdateCategoryComponent,
    UserDashbaordComponent,
    SidebarUserComponent,
    ProfileUserComponent,
    LoadQuizComponent,
    InstructionsComponent,
    StartComponent,
    UsersComponent,
    QuizCategoryComponent,
    ViewHistoryComponent,
    UpdateQuestionComponent,
    PaginationComponent,
    UpdateuserComponent,
    ResultComponent,
    ConfirmMailComponent,
    ForgotformComponent,
    NextmailComponent,
    // ViewhistoryComponent,
  
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // ChartsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule ,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    MatListModule,
    MatTableModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatSidenavModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgChartsModule ,
    

    NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
    })
  ],
 
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
