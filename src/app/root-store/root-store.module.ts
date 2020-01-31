import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelperStoreModule } from './helper-store/helper-store.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HelperStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument()
  ]
})
export class RootStoreModule { }
