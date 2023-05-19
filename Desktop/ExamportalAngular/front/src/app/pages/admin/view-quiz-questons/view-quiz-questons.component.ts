import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questons',
  templateUrl: './view-quiz-questons.component.html',
  styleUrls: ['./view-quiz-questons.component.css']
})
export class ViewQuizQuestonsComponent {
  qId = 0;
  qTitle: any;
  questions = [
    {
      quesId:'',
      content: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      answer: ''
    }
  ];


  constructor(private _routr: ActivatedRoute, private _question: QuestionService) { }

  ngOnInit(): void {
    this.qTitle = this._routr.snapshot.params['title'];
    this.qId = this._routr.snapshot.params['qid'];
    // alert(this.qId);
    this._question.getQuestionsOfQuiz(this.qId).subscribe(
      (data: any) => {
        console.log(data);
        this.questions = data;
      },
      (error) => {
      }
    )

  }
  deleteQuestion(qId:any){
    Swal.fire({
      icon:'info',
      'title':'Are You sure',
      confirmButtonText:'Delete',
      showCancelButton:true
     }) .then((result)=>{
      if(result.isConfirmed){
        // Delete
        this._question.deleteQuestion(qId).subscribe(
          (data)=>{
            // Filter
            // this.questions=this.questions.filter((question:any)=>question.qId !=qId);
            this.questions=this.questions.filter((question:any)=>question.qId !=qId);
       
            Swal.fire('success',"Question Delete SuccesFull",'success');
          },
          (error)=>{
            Swal.fire('Error','Somethimg is went Wrong','error')
          }
        )
      }
     })
  }
}
