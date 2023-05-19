// import { LocationStrategy } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { Component } from '@angular/core';
import { QuestionService } from 'src/app/service/question.service';
import Swal from 'sweetalert2';
import { HistoryserviceService } from 'src/app/service/historyservice.service';
import { LoginService } from 'src/app/service/login.service';
import { jsPDF } from 'jspdf';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  user: any;
  qid: any;
  title: any
  questions = [
    {
      quesId: '',
      content: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      answer: '',
      givenAnswer: '',
      quiz: {
        title: '',
        description: '',
        maxMarks: 0,
      }
    }
  ];

  marksGot = 0;
  correctAnswers = 0
  attempted = 0;
  isSubmit = false;
  timer = 0;
  doc = new jsPDF('p', 'mm', 'a4');
  todayDate: Date = new Date();

  // For History

  history = {
    uname: '',
    date: this.todayDate,
    marks: 0,
    correct_answer: 0,
    attempted: 0,
    quiz_name: 'eee',
    quizId: 0
  }

  constructor(private router: Router, private _route: ActivatedRoute, private _question: QuestionService, private _history: HistoryserviceService, private _login: LoginService) { }
  ngOnInit(): void {
    this.preventBackButton();
    this.qid = this._route.snapshot.params['qId']
    // Title
    this.title = this._route.snapshot.params['title']
    this.history.quiz_name = this.title;
    console.log(this.qid);
    this.history.quizId = this.qid;

    this.loadQuestions();

    // Get user details
    this.user = this._login.getUser();
    console.log(this.user);
    this.history.uname = this.user.id;


    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    });

   

  }
  loadQuestions() {
    this._question.getQuestionsOfQuizForTest(this.qid).subscribe(
      (data: any) => {
        this.questions = data;
        this.timer = this.questions.length * 2 * 60
        console.log(data);
        this.questions.forEach(q => {
          q['givenAnswer'] = '';
        })
        // To start Timer
        this.startTimer();
      },
      (error) => {
        Swal.fire('error', 'Something is went wrong!!', 'error');
      }
    )
  }


  

  preventBackButton() {
    window.onpopstate = function (event) {
      window.history.forward();
    };
  }

  submitQuiz() {
    Swal.fire({
      title: 'Do you want to submit quiz',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      icon: 'info'
    }).then((e) => {
      if (e.isConfirmed) {
        // calculation
        this.isSubmit = true;
        this.questions.forEach(q => {
          if (q.givenAnswer == q.answer) {
            this.correctAnswers++
            let marksSingle = this.questions[0].quiz.maxMarks / this.questions.length;
            this.marksGot += marksSingle;
          }
          if (q.givenAnswer.trim() != '') {
            this.attempted++;
          }
          console.log("???????????????????????",q.givenAnswer);
          
        });

        // console.log("Correct Answer" + this.correctAnswers);
        // console.log("MArks Got" + this.marksGot);
        // console.log(this.attempted);
        this.history.marks = this.marksGot;
        this.history.attempted = this.attempted;
        this.history.correct_answer = this.correctAnswers;
      }

      debugger
      // Set history
      this._history.setHistory(this.history).subscribe(
        (data: any) => {
          console.log("gdjwgdjgdjgd", data);
        })

    });
   
  }

  // For Timer
  startTimer() {
    let t: any =
      window.setInterval(() => {
        // code
        if (this.timer <= 0) {
          this.submitQuiz();
          clearInterval(t)
        } else {
          this.timer--;
        }
      }, 1000)
  }


  // Get Formated time
  getFormatedTime() {
    let mm = Math.floor(this.timer / 60)
    let ss = this.timer - mm * 60
    return `${mm} min : ${ss} sec`;
  }

  // pdf
  generatepdf() {
       // Generate PDF
       const doc = new jsPDF();
       let y = 10;
       let i = 0;
       let k=1;
       while (i < this.questions.length) {
         if (y > doc.internal.pageSize.height - 20) {
           doc.addPage();
           y = 10;
         }
         doc.text( `Question: ${this.questions[i].content}`, 10, y);
         doc.text(`Given Answer: ${this.questions[i].givenAnswer}`, 10, y + 10);
         doc.text(`Correct Answer: ${this.questions[i].answer}`, 10, y + 20);
         y += 50;
         i++;
       }
       doc.save('quiz_results.pdf');
  }
 
}
