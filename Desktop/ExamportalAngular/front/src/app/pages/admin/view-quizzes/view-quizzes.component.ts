import { Component } from '@angular/core';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent {
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

  constructor(private _quiz: QuizService) { }
  ngOnInit(): void {
    this._quiz.quizzes().subscribe(
      (data: any) => {
        this.quizzes = data;
        console.log(this.quizzes);

      },
      (error) => {
        console.log(error);
        Swal.fire('Error', 'Error in loding data !', 'error')
      }
    )


  }
  // Delete quiz
  deleteQuiz(qId: any) {
    Swal.fire({
      icon: 'info',
      'title': "Are you sure ?",
      confirmButtonText: 'Delete',
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete
        this._quiz.deleteQuiz(qId).subscribe((data) => {
          // Filter for hand on delete without refreshing
          this.quizzes = this.quizzes.filter((quiz: any) => quiz.qId != qId);
          Swal.fire('success', 'Quiz Deleted', 'success');
        },
          (error) => {
            Swal.fire('error', 'something went wrong please try again!!', 'error');
          }
        )
      }
      // Delete done
    })
  }



}
