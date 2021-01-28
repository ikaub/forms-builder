import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AuthService } from 'src/app/auth/services/auth.service';
import { animate, query, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('inOut', [
      transition(':enter', [
        query('.error', [
          style({
            width: '0',
            opacity: 0,
          }),
          animate('.4s'),
        ]),
      ]),
      transition(':leave', [
        query('.error', [
          animate('.3s', style({
            width: '0',
            opacity: '0',
          }))
        ])
      ]),
    ]),
  ]
})
export class AuthComponent implements OnInit {
  formGroup!: FormGroup;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.formGroup = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  onAuth(): void {
    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value);
    } else {
      this.errorMessage = 'Email or password are incorrect';
    }
  }

  closeError(): void {
    this.errorMessage = '';
  }
}
