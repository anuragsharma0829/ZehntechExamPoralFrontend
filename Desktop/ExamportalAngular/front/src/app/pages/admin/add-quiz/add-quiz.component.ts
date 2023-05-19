
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/service/category.service';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent {
  @ViewChild('f', { static: true })
  f!: NgForm;
  color = 'accent';
  checked = false;
  disabled = false;
  accent: any;




  // For using show category in form
  categories = [
    {
      cid: '',
      title: ''
    }
  ]

  // For saving quiez
  quizData = {
    title: '',
    description: '',
    maxMarks: '',
    numberOfQuestions: '',
    active: true,
    category: {
      cid: ''
    },
  }


  constructor(private _cat: CategoryService, private snack: MatSnackBar, private _quiz: QuizService) { }

  ngOnInit(): void {



    // This Api for set category in form 
    this._cat.category().subscribe((data: any) => {
      // Categories load
      this.categories = data;
      console.log(this.categories);
    },
      (error) => {
        Swal.fire('error!!', 'error in loading data from server', 'error');
      }
    );
  }


  // This Function for save Quiz

  addQuiz() {

    // Call server
    this._quiz.addQuiz(this.quizData).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Success', 'Quiz is Added Successfuly', 'success');
      },
      (error) => {

        console.log(error);

      }

    )
  }


}
