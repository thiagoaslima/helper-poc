import { Component, TemplateRef, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '../root-store/root-state';
import { timer, Subject, merge } from 'rxjs';
import { AddHelperCard } from '../root-store/helper-store/actions';
import { BASIC_CARD } from '../contextual-help/contextual-help.module';
import { tap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnDestroy {
  removeCard$ = new Subject();
  private destroy$ = new Subject();

  timer$ = timer(1000, 1000).pipe(
    tap(v => console.log('billing component timer', v)),
    takeUntil(this.destroy$)
  );

  constructor(
    private store: Store<State>
  ) { }

  addCard(priority: number, template: TemplateRef<any>) {
    this.store.dispatch(
      new AddHelperCard({
        name: BASIC_CARD,
        priority,
        close: merge(this.removeCard$, this.destroy$),
        props: {
          title: 'Subject card example',
          content: template,
        }
      })
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
