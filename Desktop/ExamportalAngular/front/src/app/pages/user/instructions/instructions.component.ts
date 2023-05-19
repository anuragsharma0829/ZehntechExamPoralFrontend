import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent {
qid:any
title:any
quiz=
  {
    title:'',
    numberOfQuestions:0,
    description:'',
    maxMarks:''
  }


  constructor(private routr:ActivatedRoute, private _quiz:QuizService,private _routr:Router){

  }
  ngOnInit():void{
      this.qid=this.routr.snapshot.params['qId']
      this.title=this.routr.snapshot.params['title']
      this._quiz.getQuiz(this.qid).subscribe(
        (data:any)=>{
          this.quiz=data
          console.log(this.quiz);
          
        },
        (error)=>{
          Swal.fire('error',"Error whilw Loading Data",'error')
        }
      )
  }
  startQuiz(){
    Swal.fire({
      title: 'Do you want to start quiz',
      
      showCancelButton: true,
      confirmButtonText: 'Start',
      denyButtonText: `Don't save`,
      icon:'info'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
      

// this._routr.navigate(['/start/'+this.qid])
this._routr.navigate(['/start/' + this.qid + '/' + this.title])


      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

}
