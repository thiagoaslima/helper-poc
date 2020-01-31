import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../root-store/helper-store/state';
import { AddHelperCard } from '../root-store/helper-store/actions';
import { BASIC_CARD } from '../contextual-help/contextual-help.module';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(public store: Store<State>) {}

  setCard() {
    this.store.dispatch(
      new AddHelperCard({
        name: BASIC_CARD,
        props: {
          title: 'Basic card example'
        }
      })
    );
  }

  ngOnInit() {}
}
