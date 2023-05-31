import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Store } from '@ngrx/store';
import { UserState } from '../user/store/reducer/user.reducer';
import { addUser } from '../user/store/action/user.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor( private router: Router, private store :Store<UserState> ) { }
hide=true;
hide1=true;
gotologin(){
  this.router.navigate(['/login'])
}
addUser(userName:string){
  const user= new User();
  user.name=userName;
  this.store.dispatch(addUser(user));
}
}

