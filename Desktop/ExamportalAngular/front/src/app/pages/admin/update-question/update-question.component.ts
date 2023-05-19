import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent {

  color = 'accent';
  checked = false;
  disabled = false;
  accent: any;

  qId = 0;
  question={
    quiz:{
      qId:''
    },
    content:'rr',
    option1:'rrr',
    option2:'rr',
    option3:'rr',
    option4:'rr',
    answer:'rr',
    active: true,
  }
  constructor(private _route: ActivatedRoute, private _quest:QuestionService){
    this.qId = this._route.snapshot.params['quesId'];
    console.log(this.qId);
  }

  ngOnInit():void{
    this._quest.getSingleQuestion(this.qId).subscribe(
      (data:any)=>{
        console.log(data);
        this.question=data;
      }
    )
  }
  updatequestion(){
    this._quest.updateQuestion(this.question).subscribe(
      (data)=>{
Swal.fire('success','Question Update SuccesFull','success')
      },(error)=>{
        Swal.fire('error','Something is went wrong','error')
      }
    )
  }

  }


