import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user';

export const addUser = createAction(
  '[User] Add Users',
    (user:User)=>({user})
);
