import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Store, select } from '@ngrx/store';
import { selectuser } from '../user/store/selector/user.selectors';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  user$: Observable<User[]> |undefined;

  gotologin(){
    this.router.navigate(['/login'])
  }
  constructor(private store:Store,private router: Router){
    this.user$=this.store.pipe(select(selectuser))
  }
  ngOnInit(): void {
  }
}


