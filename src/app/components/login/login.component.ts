import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    username = '';
    password = '';

    constructor(private authService: AuthService, private router: Router) {}

    login(): void {
        this.authService.login(this.username, this.password).subscribe({
            next: () => this.router.navigate(['/']),
            error: (err: any) => console.error(err)
        });
    }

    goToRegister(): void {
        this.router.navigate(['/register']);
    }
}
