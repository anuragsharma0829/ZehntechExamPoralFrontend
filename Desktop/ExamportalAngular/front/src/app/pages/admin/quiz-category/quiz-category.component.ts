import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/service/quiz.service';


@Component({
  selector: 'app-quiz-category',
  templateUrl: './quiz-category.component.html',
  styleUrls: ['./quiz-category.component.css']
})
export class QuizCategoryComponent {

  

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
catId:any
  constructor (private router:ActivatedRoute, private _quiz: QuizService){

  }
  ngOnInit():void{
     this.catId=this.router.snapshot.params['cid']
     console.log(this.catId);
     this._quiz.getQuizzesOfCategory(this.catId).subscribe(
      (data:any)=>{
        this.quizzes=data
      }
     )


  // Chart 
 


// Chart end


  }
}
