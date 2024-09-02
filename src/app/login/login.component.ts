import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private userService:UserService){}
  

  onSubmit() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    this.userService.setUsername(this.username);
}
}
