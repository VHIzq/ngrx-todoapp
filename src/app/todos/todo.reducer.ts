import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear } from './todo.actions';

export const estadoInicial: Todo[] = [];

export const _todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),
);

export function todoReducer(state: Todo[] = estadoInicial , action: Action) {
  return _todoReducer(state, action);
}
