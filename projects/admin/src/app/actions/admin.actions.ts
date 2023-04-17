import { Action } from '@ngrx/store';
import { admin } from '../modal/admin-info.modal';

export const ADD_ADMIN = 'Add Admin';
export const DELETE_ADMIN = 'Delete Admin';


export class AddAdmin implements Action {
    readonly type = ADD_ADMIN;

    constructor(public payload: admin) {}
}

export class RemoveAdmin implements Action {
    readonly type = DELETE_ADMIN;

    constructor(public payload: number) {}
}

export type Actions = AddAdmin | RemoveAdmin;