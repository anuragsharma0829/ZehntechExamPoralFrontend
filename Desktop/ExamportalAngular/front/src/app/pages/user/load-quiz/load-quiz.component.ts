import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { param } from 'jquery';
import { CategoryService } from 'src/app/service/category.service';
import { LoginService } from 'src/app/service/login.service';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent {
  catid: any
  user: any;
  // For binding data
  quizzes = [
    {
      qId: '',
      title: '',
      description: '',
      maxMarks: '',
      numberOfQuestions: '',
      active: '',
      category: {
        title: ''
      }
    }
  ]
  uid: any;
  constructor(private _quiz: QuizService, private _routr: ActivatedRoute, private _routrr: Router, private _login: LoginService) {

  }
  ngOnInit(): void {
    // Get User into user for set History
    this.user = this._login.getUser();
    console.log(this.user);
    let userid = this.user.id
    console.log("<<<<<<<<<<<<<<<", userid);

    // 
    this._routr.params.subscribe((params: any) => {
      this.catid = params.catId;
      if (this.catid == 0) {
        this._quiz.getActiveQuizzes().subscribe(
          (data: any) => {
            this.quizzes = data;
          }
        )


      } else {
        console.log("load specific quiz");
        this._quiz.getQuizzesOfCategory(this.catid).subscribe((data: any) => {
          this.quizzes = data;
        })
      }
    })
  }



  redirect(qId: any, title: any, uid: any) {
    console.log(qId, title);
    uid = this.user.id
    this._routrr.navigate(['/user-dashbaord/history/' + qId + '/' + title + '/' + uid])

  }


}
