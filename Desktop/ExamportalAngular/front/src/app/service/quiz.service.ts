import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient) { }
// For get quizzes
  public quizzes(){
    return this._http.get(`${baseUrl}/quiz/`)
  }


  // Add Quiz 
  public addQuiz(quiz:any)
  {
  return this._http.post(`${baseUrl}/quiz/`,quiz)
  }

  // Delete Quiz
 public deleteQuiz(qId:any){
     return this._http.delete(`${baseUrl}/quiz/${qId}`);
 }
 
//  Get Single Quiz
public getQuiz(qId:any){
  return this._http.get(`${baseUrl}/quiz/${qId}`);
}

// Update quiz
  public updateQuiz(quiz:any){
    return this._http.put(`${baseUrl}/quiz/`,quiz)
  }

  // Total quizzes
  public totalQuizz(){
    return this._http.get(`${baseUrl}/quiz/qtotal`)
  }

  // GEt active quizzes
public getActiveQuizzes(){
  return this._http.get(`${baseUrl}/quiz/active`)
}

// Get active quizzes of category
public getActiceQuizzesOfCategory(cid:any){
  return this._http.get(`${baseUrl}/quiz/category/active/${cid}`)
}

// Get quizzes of category
public getQuizzesOfCategory(cid:any){
  return this._http.get(`${baseUrl}/quiz/category/${cid}`)
}

}
