import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../User';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [RouterModule,RouterOutlet],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {
  title = 'Cap_project';
  username: string = '';
  user:User=new User()
  constructor(private userService: UserService,private courseService:CourseService) {
    // Get the username from the service
    this.username = this.userService.getUsername();
    this.findUser(this.username)
    
  }
  findUser(username:string){
    this.userService.getUserByUserName(username).subscribe((savedUser:User)=>{
      this.user=savedUser
      console.log(this.user)
      this.userService.setUser(this.user);
      this.findCourseById(this.user.id)
    })
  }
  findCourseById(id:Number){
    this.userService.getCourseByUserId(id).subscribe((data)=>{
      console.log(data)
    })
  }
  logout(){

  }

}
