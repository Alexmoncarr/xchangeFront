import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Register } from 'src/app/models/profile.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    formulario: FormGroup;
  
    constructor(private fb: FormBuilder, private authService: AuthService) {
      this.formulario = this.fb.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
    }
  
    register() {
        console.log('Attempting to submit registration form', this.formulario.value);
        if (this.formulario.valid) {
           this.authService.register(this.formulario.value).subscribe({
              next: (res) => console.log('Registration successful', res),
              error: (err) => console.error('Registration failed', err)
           });
        } else {
           console.error('Form is not valid', this.formulario.errors);
        }
     }
     
      
  }
