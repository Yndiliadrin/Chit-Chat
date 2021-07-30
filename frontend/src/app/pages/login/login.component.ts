import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup ({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.required])
  });

  alertMessage = '';
  alertsList: any = {
    user: () => 'Hibás E-mail cím vagy jelszó.',
    server: () => 'A szolgáltatás nem elérhető.',
    false: () => ''
  };

  hide = true;

  @HostListener('document:keydown.enter') onKeydownHandler() {
    this.login();
  }


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  navTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  login(): void {
    console.log("Login");

  }
}
