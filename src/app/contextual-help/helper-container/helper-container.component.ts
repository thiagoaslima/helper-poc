import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectHelperCards } from '../../root-store/helper-store/selector';
import { Card } from '../../root-store/helper-store/model';

@Component({
  selector: 'app-helper-container',
  templateUrl: './helper-container.component.html',
  styleUrls: ['./helper-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelperContainerComponent {
  cards$ = this.store.pipe(select(selectHelperCards));

  constructor(private store: Store<any>) {}

  trackByFn(index: number, card: Card) {
    return card.timestamp;
  }
}
