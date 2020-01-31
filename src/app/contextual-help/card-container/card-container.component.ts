import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  ViewContainerRef,
  Injector,
  ComponentFactoryResolver,
  ElementRef,
  OnDestroy,
  AfterViewInit
} from '@angular/core';

import { Card } from '../../root-store/helper-store/model';
import { BehaviorSubject, Subject, combineLatest, Observable } from 'rxjs';
import { filter, takeUntil, mapTo } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { RemoveHelperCard } from '../../root-store/helper-store/actions';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardContainerComponent implements AfterViewInit, OnDestroy {
  private card$ = new BehaviorSubject<Card>(null);
  private container$ = new BehaviorSubject<ViewContainerRef>(null);
  private destroy$ = new Subject();
  private timestamp: number;

  @Input() set card(card: Card) {
    this.card$.next(card);
  }

  @ViewChild('card', { read: ViewContainerRef, static: false })
  set cardContainer(ref: ViewContainerRef) {
    this.container$.next(ref);
  }

  constructor(
    private store: Store<any>,
    private injector: Injector,
    private element: ElementRef,
    private resolver: ComponentFactoryResolver
  ) {}

  ngAfterViewInit() {
    combineLatest(this.card$, this.container$)
      .pipe(
        filter(([card, container]): boolean => !!card && !!container),
        filter(([card]): boolean => card.timestamp !== this.timestamp),
        takeUntil(this.destroy$)
      )
      .subscribe(([card, container]): void => {
        this.instantiateComponent(card, container);
        this.element.nativeElement.setAttribute('id', card.timestamp);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  instantiateComponent(card: Card, container: ViewContainerRef): void {
    const { name, props } = card;

    container.clear();
    const components = this.injector.get('cards');
    const cmpMap = components.find(cmp => cmp[0].name === name);
    const factory = this.resolver.resolveComponentFactory(cmpMap[0].component);
    const componentRef = container.createComponent(factory);

    if (props) {
      Object.keys(props).forEach((prop): void => {
        let value = props[prop];

        if (props[prop] instanceof Observable) {
          value = value.pipe(takeUntil(this.destroy$));
        }
        componentRef.instance[prop] = value;
      });
    }

    this.registerClose(card);
    componentRef.changeDetectorRef.detectChanges();
  }

  registerClose(card: Card) {
    if (card.close) {
      debugger;
      card.close.subscribe(() => {
        this.store.dispatch(new RemoveHelperCard({ timestamp: card.timestamp }));
      });
    }
  }
}
