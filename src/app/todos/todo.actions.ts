import { createAction, props } from "@ngrx/store";

export const crear = createAction(
  '[TODO] Crear tarea',
  props<{texto: string}>()
  );