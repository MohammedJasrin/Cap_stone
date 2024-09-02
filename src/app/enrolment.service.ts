import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enrolment } from './Enrolment';

@Injectable({
  providedIn: 'root'
})
export class EnrolmentService {

  constructor(private http:HttpClient){}
  create(enroll:Enrolment):Observable<Enrolment>{
    let url ="http://localhost:8083/enrollments"
    return this.http.post<Enrolment>(url,enroll);
  }
}
