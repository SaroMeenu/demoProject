import { admin } from "./modal/admin-info.modal";
import { ActionReducerMap , MetaReducer } from "@ngrx/store";
import { reducer } from "./reducers/admin.reducer";
import { hydrationMetaReducer } from "./hydration/hydration.reducer";

export interface AppState {
    readonly adminStore: admin[];
}

export const reducers: ActionReducerMap<AppState> = {
     adminStore : reducer
}

export const metaReducers: MetaReducer[] = [
    hydrationMetaReducer
]