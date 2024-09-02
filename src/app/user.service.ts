import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';
import { Observable, of } from 'rxjs';
import { Course } from './Course';
import { Progress } from './Progress';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  username: string = '';
  user:User=new User;
  constructor(private http:HttpClient) {
   }
  saveUser(user: User):Observable<User>{
    let url="http://localhost:59390/users"
    return this.http.post<User>(url,user);
  }
  getUsers():Observable<User[]>{
    let url="http://localhost:59390/users"
    return this.http.get<User[]>(url);
  }
  getUserById(id:Number):Observable<User>{
    let url=`http://localhost:59390/users/${id}`;
    return this.http.get<User>(url)
  }
  setUsername(username: string) {
    this.username = username;
  }

  getUsername(): string {
    return this.username;
  }

  setUser(user: User) {
    this.user = user;
  }

  getUser(): Observable<User> {
    // Return the stored user if it exists, otherwise fetch it
      return of(this.user);
    } 

  getUserByUserName(username:String):Observable<User>{
    let url=`http://localhost:59390/users/username/${username}`
    return this.http.get<User>(url);
  }

  getCourseByUserId(id:Number):Observable<Course>{
    let url =`http://localhost:59390/users/coursedetail/${id}`
    return this.http.get<Course>(url);
  }
  getUserProgress(id:Number):Observable<Progress>{
    let url=`http://localhost:59390/users/userprogress/${id}`
    return this.http.get<Progress>(url)
  }
}
