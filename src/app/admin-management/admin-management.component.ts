import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CourseService } from '../course.service';
import { Course } from '../Course';
@Component({
  selector: 'app-admin-management',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './admin-management.component.html',
  styleUrl: './admin-management.component.css'
})
export class AdminManagementComponent {
  courses:Course[]=[]
  constructor(private courseService:CourseService){}
  // courses = [
  //   { id: 'UST101', title: 'Full Stack Java Developer:' ,description:'Beginner to Java', time: '2 hours', modules: '5', role: 'Java Full Stack Developer' },
  //   { id: 'UST102', title:'Full Stack .Net Developer:',description:'Beginner to .Net', time:'3 hours' , module:'7',role:'.Net'},
  //   { id: 'UST102', title:'Full Stack .Net Developer:',description:'Beginner to .Net', time:'3 hours' , module:'7',role:'.Net'},
  //   { id: 'UST102', title:'Full Stack .Net Developer:',description:'Beginner to .Net', time:'3 hours' , module:'7',role:'.Net'}

    // Add more courses as needed
  // ];
  ngOnInit():void{
    this.fetch()
  }
  fetch(){
    this.courseService.fetchAll().subscribe((data)=>{
      this.courses=data;
    })
  }
  delete(courseId: Number) {
    this.courseService.deleteById(courseId).subscribe(
      () => {
        // Even if there's no response, remove the course from the array
        this.courses = this.courses.filter(course => course.course_id !== courseId);
      },
    )
  }
}
