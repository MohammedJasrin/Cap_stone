import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Progress } from './Progress';
import { Feedback } from './Feedback';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  progress:Progress=new Progress()
  currentModule=0
  
  constructor(private http:HttpClient) {}

  createProgress(progress:Progress):Observable<Progress>{
    let url = "http://localhost:8084/progress"
    return this.http.post<Progress>(url,progress)
  }

  updateProgress(id:Number,progress:Progress){
    let url = `http://localhost:8084/progress/${id}`
    return this.http.put<Progress>(url,progress)
  }
  setProgress(progress:Progress){
    this.progress=progress;
  }

  getProgress(){
    return this.progress
  }
  setCurrentModule(current:number){
    this.currentModule=current;
  }
  getCurrentMofule(){
    return this.currentModule
  }
}
