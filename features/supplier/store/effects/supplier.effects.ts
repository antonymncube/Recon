import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
 
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
 
import { SupplierService } from '../../service/supplier.service';
import { addSupplier, addSupplierFailure, addSupplierSuccess } from '../actions/action';

@Injectable()
export class  suppliereffects {

  constructor(
    private SuppleirService: SupplierService,
    private actions$: Actions
  ) {}

  addInvoice$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addSupplier),
      mergeMap(action =>
        this.SuppleirService.postSuppliers(action.supplier).pipe(
          tap(response => console.log('Supplier successfully added:', response)),
          map(supplier => addSupplierSuccess({ supplier  })),
          catchError(error => {
            console.error('Failed to add supplier:', error);
            return of(addSupplierFailure({ error }));
          })
        )
      )
    )
  );
}
