import { Component, OnInit } from '@angular/core';
import {User} from '../model/User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  constructor(private router: Router) { }

  ngOnInit() {
    this.user = new User();
  }

  login() {
    if ( this.user.username === 'haithem' && this.user.password === '123456') {
      this.router.navigateByUrl('/nav');
    } else {
      alert('Echec De Donner');
    }
  }
}
