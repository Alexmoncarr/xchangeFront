// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = ''; // Inicialización directa con un string vacío
  password: string = ''; // Inicialización directa con un string vacío
  error: string | null = null; // Permitir que error sea string o null, inicializado como null

  constructor(private authService: AuthService) {}

  handleLogin(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        // handle successful login, perhaps redirect to dashboard or home
      },
      error: error => {
        this.error = 'Failed to login';
        console.error(error);
      }
    });
  }
}
