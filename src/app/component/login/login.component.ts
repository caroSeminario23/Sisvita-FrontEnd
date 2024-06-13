import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userType: string | undefined;
  email: string | undefined;
  password: string | undefined;
  errorMessage: string | undefined;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    if (this.userType && this.email && this.password) {
      this.authService.login(this.userType, this.email, this.password).subscribe(
        response => {
          if (response.success) {
            this.redirectUser(response.userType);
          } else {
            this.errorMessage = response.message;
          }
        },
        error => {
          this.errorMessage = 'Error de servidor. Por favor, intente de nuevo más tarde.';
        }
      );
    } else {
      this.errorMessage = 'Por favor, complete todos los campos.';
    }
  }

  redirectUser(userType: string) {
    if (userType === 'student') {
      this.router.navigate(['/student-dashboard']);
    } else if (userType === 'specialist') {
      this.router.navigate(['/specialist-dashboard']);
    } else if (userType === 'admin') {
      this.router.navigate(['/admin-dashboard']);
    }
  }
}
