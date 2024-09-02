import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  users = [
    { id: '680324', name: 'John Doe', email: 'john.doe@ust.com', role: 'SDE - A1' },
    { id: '683409', name: 'Muhammed Jasrin', email: 'muhammed.jasrin@ust.com', role: 'SDE - A1' },
    { id: '683409', name: 'Alen Joy', email: 'alen.joy@ust.com', role: 'SDE - A1' },
    { id: '683409', name: 'Surya Kiran P M', email: 'surya.kiran.p.m@ust.com', role: 'SDE - A1' },
    { id: '683409', name: 'Enric S Neelamkavil', email: 'enrics.neelamkavil@ust.com', role: 'SDE - A1' },
    { id: '683409', name: 'Alensa Anto', email: 'alensa.anto@ust.com', role: 'SDE - A1' },
    { id: '683409', name: 'Surya Kiran P M', email: 'surya.kiran.p.m@ust.com', role: 'SDE - A1' },
  ];
  logout(){
    
  }
}
