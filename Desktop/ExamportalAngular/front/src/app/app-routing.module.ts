import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { PaginationComponent } from './pages/admin/pagination/pagination.component';
import { QuizCategoryComponent } from './pages/admin/quiz-category/quiz-category.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { UpdateuserComponent } from './pages/admin/updateuser/updateuser.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewQuizQuestonsComponent } from './pages/admin/view-quiz-questons/view-quiz-questons.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ConfirmMailComponent } from './pages/confirm-mail/confirm-mail.component';
import { ForgotformComponent } from './pages/forgotform/forgotform.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NextmailComponent } from './pages/nextmail/nextmail.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { ProfileUserComponent } from './pages/user/profile-user/profile-user.component';
import { ResultComponent } from './pages/user/result/result.component';
import { StartComponent } from './pages/user/start/start.component';
import { UserDashbaordComponent } from './pages/user/user-dashbaord/user-dashbaord.component';
import { ViewHistoryComponent } from './pages/user/view-history/view-history.component';
// import { ViewhistoryComponent } from './pages/user/viewhistory/viewhistory.component';
import { AdminGuard } from './service/admin.guard';
import { NormalGuard } from './service/normal.guard';



const routes: Routes = [

    {
        path:'',
        component:HomeComponent,
        pathMatch:'full'
    },
    {
        path:'signup',
        component:SignupComponent,
        pathMatch:'full'
    },

    {
        path:'login',
        component:LoginComponent
    },

    {
        path:'forgotPass',
        component:ForgotformComponent
       },
       {
        path:'cheakmail',
        component:ConfirmMailComponent
       },
       {
        path:'nextmail',
        component:NextmailComponent
       },
       {
        path:'updateuser/:id',
        component:UpdateuserComponent
       },

    {
       path:'admin',
       component:DashboardComponent,
       canActivate:[AdminGuard],
       children:[
        {
            path:'',
            component:WelcomeComponent
        },
        {
            path:'profile',
            component:ProfileComponent
        },
        {
            path:'categories',
            component:ViewCategoriesComponent
        },

        {
            path:'add-category',
            component:AddCategoryComponent
        },
        {
            path:'category/:cid',
            component:UpdateQuizComponent
        },
        {
            path:'quizzes',
            component:ViewQuizzesComponent
        },
        {
            path:'add-quiz',
            component:AddQuizComponent
        },
        {
            path:'quiz/:qid',
            component:UpdateQuizComponent
        },
        {
            path:'updatequestion/:quesId',
            component:UpdateQuestionComponent
        },
        {
            path:'view-qustions/:qid/:title',
            component:ViewQuizQuestonsComponent
        },
        {
            path:'add-qustions/:qid/:title',
            component:AddQuestionComponent
        },
        {
            path:'users',
            component:UsersComponent
        },

        {
            path:'quizCategory/:cid',
            component:QuizCategoryComponent
        },
        {
            path:'pagination',
            component:PaginationComponent
        },
      
       ]
    },


    {
        path:'user-dashbaord',
        component:UserDashbaordComponent,
        canActivate:[NormalGuard],
        children:[
            {
                path:':catId',
                component:LoadQuizComponent
            },
            {
                path: 'instructions/:qId/:title',
                component:InstructionsComponent
            },
            {
                path: 'user/uprofile',
                component: ProfileUserComponent
            },
           
            {
                path:'history/:qId/:title/:uid',
                component:ViewHistoryComponent
            },
            {
                path:'Answers',
                component:ResultComponent,
            }
        ]
    },
{
    path:'start/:qId/:title',
    component:StartComponent,
    canActivate:[NormalGuard]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }