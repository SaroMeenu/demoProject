import { Action } from '@ngrx/store';
import { admin } from '../modal/admin-info.modal';

export const ADD_ADMIN = 'Add Admin';

export class AddAdmin implements Action {
    readonly type = ADD_ADMIN;

    constructor(public payload: admin) {}
}

export type Actions = AddAdmin;