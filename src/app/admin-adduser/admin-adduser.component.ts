import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../User';
import { UserService } from '../user.service';
import { RouterModule } from '@angular/router';
import { EnrolmentService } from '../enrolment.service';
import { Enrolment } from '../Enrolment';
import { DatePipe } from '@angular/common';
import { ProgressService } from '../progress.service';
import { Progress } from '../Progress';

@Component({
  selector: 'app-admin-adduser',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './admin-adduser.component.html',
  styleUrls: ['./admin-adduser.component.css'] // Corrected to 'styleUrls'
})
export class AdminAdduserComponent {
  user: User = new User();
  enroll: Enrolment = new Enrolment();
  progress:Progress = new Progress();
  constructor(
    private userService: UserService,
    private enrolmentService: EnrolmentService,
    private progressService:ProgressService
  ) {}

  onSubmit() {
    this.userService.saveUser(this.user).subscribe((savedUser: User) => {
      this.user = savedUser; // User object is now fully saved and includes the ID
      
      console.log('User ID:', this.user.id); // Now the user ID should be correctly logged

      // Assign the userId to the enrollment
      this.enroll.userId = this.user.id;
      this.progress.userId=this.user.id
      this.progress.status="0"

      // Set the courseId based on the user's role
      if (this.user.role === '.Net C#') {
        this.enroll.courseId = 1;
        this.progress.courseId=1;
      } else if (this.user.role === 'Java Developer') {
        this.enroll.courseId = 2;
        this.progress.courseId=2;
      } else if (this.user.role === 'Python Data Engineer') {
        this.enroll.courseId = 3;
        this.progress.courseId=3;
      }

      // Set the start date for the enrollment
      this.enroll.startDate = new Date();

      // Now save the enrollment
      this.enrolmentService.create(this.enroll).subscribe((enrollData) => {
        console.log('Enrollment saved:', enrollData);
      });
      this.progressService.createProgress(this.progress).subscribe((data)=>{
        console.log(data);
      })
    });
  }
}
