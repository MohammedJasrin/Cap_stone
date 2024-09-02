import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feedback } from './Feedback';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  totalFeedbacks=0
  constructor(private http:HttpClient) { 
    
  }
  createFeedback(feedback:Feedback):Observable<Feedback>{
    let url ="http://localhost:8085/feedback"
    return this.http.post<Feedback>(url,feedback)
  }
  getAllFeedback():Observable<Feedback[]>{
    let url ="http://localhost:8085/feedback"
    return this.http.get<Feedback[]>(url)
  }
  setFeedbackLenght(totalFeedbacks:number){
    this.totalFeedbacks=totalFeedbacks;
  }
  getFeedbackLength(){
    return this.totalFeedbacks;
  }
}
