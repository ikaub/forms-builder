import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../types/app.types';
import { login } from '../../store/auth.actions';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.min(4)]),
    });
    const sub = this.authService.isAuthorized().subscribe(isAuthorized => {
      if (isAuthorized) {
        this.router.navigate(['/form-builder']);
        sub.unsubscribe();
      }
    });
  }

  onAuth(): void {
    if (this.formGroup.valid) {
      this.store.dispatch(login(this.formGroup.value));
    }
  }

}
