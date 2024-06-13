import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'; // Importa SweetAlert2

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user_type: string ='';
  email: string ='';
  contrasenia: string ='';
  errorMessage: string ='';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    if (this.user_type && this.email && this.contrasenia) {
      this.authService.login(this.user_type, this.email, this.contrasenia).subscribe(
        response => {
          if (response.success) {
            this.redirectUser(response.user_type);
            Swal.fire('¡Éxito!', 'Inicio de sesión exitoso', 'success'); // Muestra SweetAlert2 de éxito
          } else {
            this.errorMessage = response.message;
            Swal.fire('¡Error!', this.errorMessage, 'error'); // Muestra SweetAlert2 de error
          }
        },
        error => {
          this.errorMessage = 'Error de servidor. Por favor, intente de nuevo más tarde.';
          Swal.fire('¡Error!', this.errorMessage, 'error'); // Muestra SweetAlert2 de error
        }
      );
    } else {
      this.errorMessage = 'Por favor, complete todos los campos.';
      Swal.fire('¡Advertencia!', this.errorMessage, 'warning'); // Muestra SweetAlert2 de advertencia
    }
  }

  redirectUser(userType: string) {
    if (userType === 'Estudiante') {
      this.router.navigate(['/student-dashboard']);
    } else if (userType === 'Especialista') {
      this.router.navigate(['/specialist-dashboard']);
    } else if (userType === 'Administrador') {
      this.router.navigate(['/admin-dashboard']);
    }
  }
}
