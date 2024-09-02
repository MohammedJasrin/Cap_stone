import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { User } from '../User';
import { UserService } from '../user.service';
@Component({
  selector: 'app-admin-usermanagement',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './admin-usermanagement.component.html',
  styleUrls: ['./admin-usermanagement.component.css'],
  
})

export class AdminUsermanagementComponent {
  constructor(private userService:UserService){}
  users:User[]=[]
  // users = [
  //   { id: '680324', name: 'John Doe', email: 'john.doe@ust.com', role: 'SDE - A1' },
  //   { id: '683409', name: 'Muhammed Jasrin', email: 'muhammed.jasrin@ust.com', role: 'SDE - A1' },
  //   { id: '683409', name: 'Alen Joy', email: 'alen.joy@ust.com', role: 'SDE - A1' },
  //   { id: '683409', name: 'Surya Kiran P M', email: 'surya.kiran.p.m@ust.com', role: 'SDE - A1' },
  //   { id: '683409', name: 'Enric S Neelamkavil', email: 'enrics.neelamkavil@ust.com', role: 'SDE - A1' },
  //   { id: '683409', name: 'Alensa Anto', email: 'alensa.anto@ust.com', role: 'SDE - A1' },
  //   { id: '683409', name: 'Surya Kiran P M', email: 'surya.kiran.p.m@ust.com', role: 'SDE - A1' },
  //   // Add more users as needed for testing
  // ];
  ngOnInit(): void {
    this.fetch();
  }
  fetch(){
    this.userService.getUsers().subscribe((data:User[])=>{
      console.log(data);
      this.users=data;
      
    })
  }
  currentPage = 0;
  itemsPerPage = 6;

  get paginatedUsers() {
    const startIndex = this.currentPage * this.itemsPerPage;
    return this.users.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage() {
    if ((this.currentPage + 1) * this.itemsPerPage < this.users.length) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }
}
