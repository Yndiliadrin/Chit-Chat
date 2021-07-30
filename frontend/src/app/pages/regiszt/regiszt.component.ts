import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regiszt',
  templateUrl: './regiszt.component.html',
  styleUrls: ['./regiszt.component.scss']
})
export class RegisztComponent implements OnInit {

  form: FormGroup = new FormGroup({
    f_name: new FormControl('', Validators.required),
    s_name: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
    ]),
    password: new FormControl('',  [
      Validators.required,
      Validators.pattern("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}")
    ]),
    confirmPassword: new FormControl('',  [
      Validators.required,
      Validators.pattern("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}")
    ])
  });

  alertMessage = '';
  alertsList: any = {
    user: () => 'Hibás E-mail cím vagy jelszó.',
    server: () => 'A szolgáltatás nem elérhető.',
    false: () => ''
  };

  @HostListener('document:keydown.enter') onKeydownHandler() {
    this.regiszt();
  }

  regiszt() {
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navTo(url: string) {
    this.router.navigateByUrl(url);
  }


  matchingPasswords(): boolean {
    return this.form.value.password === this.form.value.confirmPassword;
  }

}
