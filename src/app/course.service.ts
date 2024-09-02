import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from './Course';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  selectedCourse:Course=new Course()
  constructor(private http:HttpClient) { }

  createCourse(course:Course):Observable<Object>{
    let url ="http://localhost:8082/courses"
    return this.http.post(url,course);
  }

  fetchAll():Observable<Course[]>{
    let url = "http://localhost:8082/courses"
    return this.http.get<Course[]>(url);
  }

  deleteById(id:Number):Observable<void>{
    let url =`http://localhost:8082/courses/${id}`
    return this.http.delete<void>(url);
  }
  setSelectedCourse(course: Course) {
    this.selectedCourse = course;
  }
  
  getSelectedCourse(): Observable<Course> {
    // Return the stored course if it exists, otherwise fetch it
    
      return of(this.selectedCourse);
    }
}
