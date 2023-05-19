import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  getItems(pageIndex: any, pageSize: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private _http:HttpClient) { }

  public getQuestionsOfQuiz(qId:any){
    return this._http.get(`${baseUrl}/question/quiz/all/${qId}`);
  }

  // Add Question
  public addQuestion(question:any){
    return this._http.post(`${baseUrl}/question/`,question);
  }

  // Delete Question
    public deleteQuestion(questionId:any){
      return this._http.delete(`${baseUrl}/question/${questionId}`);
    }

    public getQuestionsOfQuizForTest(qId:any){
      return this._http.get(`${baseUrl}/question/quiz/${qId}`);
    }
    
    // Get Single Question
    public getSingleQuestion(qId:any){
      return this._http.get(`${baseUrl}/question/${qId}`)
    }

    // update quiz
    public updateQuestion(question:any){
      return this._http.put(`${baseUrl}/question/`,question)
    }
  
}
