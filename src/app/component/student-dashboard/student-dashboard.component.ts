import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarEstudianteComponent } from '../navbar-estudiante/navbar-estudiante.component';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [RouterModule, NavbarEstudianteComponent],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})
export class StudentDashboardComponent {

}
