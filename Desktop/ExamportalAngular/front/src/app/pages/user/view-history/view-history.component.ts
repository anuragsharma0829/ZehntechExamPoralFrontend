import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoryserviceService } from 'src/app/service/historyservice.service';

@Component({
  selector: 'app-view-history',
  templateUrl: './view-history.component.html',
  styleUrls: ['./view-history.component.css']
})
export class ViewHistoryComponent {
  userid: any
  quizId: any
  qtitle: any

  history = [
    {
    
      Eid:'',
      uname:'',
      marks:'',
      date:'',
      correct_answer:'',
      attempted:'',
      quizId:'',
      quiz_name:''

    }
  ]
  

  constructor(private _routr: ActivatedRoute, private _routrr: Router, private _history:HistoryserviceService) {

  }


  ngOnInit(): void {
    this.userid = this._routr.snapshot.params['uid']
    console.log(this.userid);
    this.quizId = this._routr.snapshot.params['qId']
    console.log(this.quizId);
    this.qtitle = this._routr.snapshot.params['title']
    console.log(this.qtitle);

    // Get History
    this._history.getHistory(this.userid,this.quizId).subscribe(
      (data:any)=>{
        console.log(data);
        this.history=data;
        
      }
    )

  }



}
