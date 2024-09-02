import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule,NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CourseService } from '../course.service';
import { Course } from '../Course';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-admin-addcourse',
  standalone: true,
  imports: [FormsModule,HttpClientModule,RouterModule],
  templateUrl: './admin-addcourse.component.html',
  styleUrl: './admin-addcourse.component.css'
})
export class AdminAddcourseComponent {
  course:Course=new Course()
  constructor(private courseService:CourseService){}
  onSubmit() {
    this.courseService.createCourse(this.course).subscribe((data)=>{
      console.log(data)
    })
    }
  }

