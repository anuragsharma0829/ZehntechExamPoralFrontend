import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent {
 
  constructor(private _route:ActivatedRoute,private _quiz:QuizService,private _cat:CategoryService){

  }

  qId=0;
  category: any;
  quiz={
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestions:'',
    active:true,
   category:{
    cid:''
   },
  }
 
 
  ngOnInit():void{
    this.qId= this._route.snapshot.params['qid'];
    // alert(this.qId);
    this._quiz.getQuiz(this.qId).subscribe(
      (data:any)=>{
     console.log(data);
     this.quiz=data
      },
      (error)=>{
console.log(error);

      }
    );
  }

// update form
public updateData(){
  // Validation
  this._quiz.updateQuiz(this.quiz).subscribe(
  (data)=>{
  Swal.fire("Success",'Quiz updated','success')
  },
  (error)=>{
    Swal.fire("Error",'Something is went wrong!! Please try again!!','error')
  }
  )
}

}
