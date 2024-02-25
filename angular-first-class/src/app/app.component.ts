import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseComponent } from './course.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseComponent, HomeComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-first-class';
}
