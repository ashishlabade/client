import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My First Angular Project';
  users: any;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
      this.http.get('https://localhost:6600/api/users').subscribe({ // SQL-Lite Records (Angular Addreess http://localhost:4200
        next: response => this.users = response,
        error: error => console.log(error), 
        complete: () => console.log("Request Completed")
      })
  }
}
