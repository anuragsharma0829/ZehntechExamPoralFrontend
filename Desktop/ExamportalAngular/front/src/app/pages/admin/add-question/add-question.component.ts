import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {
  @ViewChild('f', { static: true })
  f!: NgForm;
  
  color = 'accent';
  checked = false;
  disabled = false;
  accent: any;

qId: any;
qTitle:any;
question={
  quiz:{
    qId:''
  },
  content:'',
  option1:'',
  option2:'',
  option3:'',
  option4:'',
  answer:'',
  active: true
}
  constructor(private routr:ActivatedRoute, private _question:QuestionService){
this.qId=this.routr.snapshot.params['qId'];
this.question.quiz['qId']=this.qId;
this.qTitle=this.routr.snapshot.params['title'];
console.log(this.qTitle);


  }

  ngOnInit():void{
 
  }

  formSubmit(){
  
    if(this.question.content.trim()=='' || this.question.content==null)
    {
      return;
    }

    if (this.f.valid) {
       // Form submit
    this._question.addQuestion(this.question).subscribe(
      (data)=>{
        console.log(data);
        Swal.fire('success',"Question Added Succedully",'success');
        // this.question.content='';
        // this.question.option1='';
        // this.question.option2='';
        // this.question.option3='';
        // this.question.option4='';
        // this.question.answer='';
       
      },
      (error)=>{
        Swal.fire('error','Something is went Wrong','error')
      }
    )
    }else{
      console.log("error");
      
    }

   

  }

}
