import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { setBooksList } from "src/app/state/books.actions";
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";

@Injectable()
export class BooksService {
  constructor(private actions$: Actions) {}

  private loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      mergeMap(() => {
        // API call
        return of([
          { id: 0, title: 'First book' },
          { id: 1, title: 'Second Book' }
        ]).pipe(map(books => {
          return setBooksList({ books });
        }))
      })
    )
  );
}
