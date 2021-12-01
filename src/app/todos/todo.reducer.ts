import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { Todo } from "./models/todo.models";
import { crear, editar, toggle } from "./todo.actions";

export const estadoInicial: Todo[] = [
    new Todo("Salvar al mundo"),
    new Todo("Salvar al mundo"),
    new Todo("Salvar al mundo"),
];

const _todoReducer = createReducer(estadoInicial, 
    on(crear, (state, { texto }) => [...state, new Todo(texto)]),
    on(toggle, (state, { id }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completado: !todo.completado
                }
            } else {
                return todo;
            }
        });
    }),
    on(editar, (state, { id, texto }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    texto: texto
                }
            } else {
                return todo;
            }
        });
    })
);

export function todoReducer(state: any, action: any) {
    return _todoReducer(state, action);
}