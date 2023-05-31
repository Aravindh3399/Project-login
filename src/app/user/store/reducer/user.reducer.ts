import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user';
import * as UserActions from "src/app/user/store/action/user.actions"
export const userFeatureKey = 'user';

export interface UserState {
users:User[];
}

export const initialState: UserState = {
users:[]
};

export const userreducer = createReducer(
  initialState,
  on(UserActions.addUser,(state:UserState,{user})=>(
    {
      ...state,
      users:[...state.users,user]
    }
  ))
);

