import { createAction, props } from "@ngrx/store";

export const crear = createAction(
    "[Todo] Add Todo",
    props<{ texto: string }>()
);
