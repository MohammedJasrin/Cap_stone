import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { UserService } from '../user.service';
import { User } from '../User';
@Component({
  selector: 'app-admin-searchuser',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './admin-searchuser.component.html',
  styleUrl: './admin-searchuser.component.css'
})
export class AdminSearchuserComponent {
  searchTerm: string = '';
  user: User = new User(); // You can define a proper user type or interface based on your data structure
  notFound: boolean = false;
  constructor (private userService:UserService){}
  id=0
  found=false
  // Simulated search function (replace this with actual service call)
  onSearch(id:Number) {
    // if (form.valid) {
    //   // Simulate user search (replace with actual search logic)
    //   const userList = [
    //     { name: 'John Doe', username: 'johndoe' },
    //     { name: 'Jane Smith', username: 'janesmith' }
    //   ];

      // this.user = userList.find(u => u.name.toLowerCase() === this.searchTerm.toLowerCase()) || null;
      // this.notFound = !this.user;
      this.userService.getUserById(id).subscribe((data:User)=>{
        this.user=data
        this.found=true
      })
    }
  }

