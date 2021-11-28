import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { Todo } from "./models/todo.models";
import { crear } from "./todo.actions";

export const estadoInicial: Todo[] = [
    new Todo("Salvar al mundo"),
];

const _todoReducer = createReducer(estadoInicial, 
    on(crear, (state, { texto}) => [...state, new Todo(texto)]) 
);

export function todoReducer(state: any, action: any) {
    return _todoReducer(state, action);
}