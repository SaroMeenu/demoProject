import { admin } from "../modal/admin-info.modal";
import * as AdminActions from '../actions/admin.actions';


export function reducer (state: admin[] = [] , action:any) {
    switch(action.type) {
        case AdminActions.ADD_ADMIN:
           return [...state,action.payload]; 
        default:
            return state;
    }
}