import { ActionReducer, INIT, UPDATE } from "@ngrx/store";
import { AppState } from "../app.state";

export const hydrationMetaReducer = (
    reducer: ActionReducer<AppState>
): ActionReducer<AppState> => {
   return (state, action) => {
      if(action.type === INIT || action.type === UPDATE) {
         const storageValue = localStorage.getItem("admin");
         if(storageValue){
            try {
              return JSON.parse(storageValue);
            } catch {
                localStorage.removeItem("admin");
            }
         }
      }

      const nextState = reducer(state, action);
      localStorage.setItem("admin", JSON.stringify(nextState));
      return nextState;
   }
}
