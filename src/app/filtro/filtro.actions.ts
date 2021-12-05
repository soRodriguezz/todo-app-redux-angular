import { createAction, props } from "@ngrx/store";

export type filtrosValidos = "todos" | "completados" | "pendientes";

export const increment = createAction(
    '[Filtro] Set Filtro',
    props<{ filtro: filtrosValidos }>()
);