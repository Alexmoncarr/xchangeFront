import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  createEvent(): void {
    console.log("Creating a new event");
    // Add logic for creating an event
  }

  manageUsers(): void {
    console.log("Managing users");
    // Add logic for managing users
  }
}