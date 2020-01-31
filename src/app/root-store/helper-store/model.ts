import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export interface Card {
  name: InjectionToken<any>;
  props: Record<string, any>;
  close?: Observable<any>;
  priority: number;
  routes: string[];
  timestamp: number;
}

export const defaultCard = {
  name: null,
  props: null,
  priority: 0,
  routes: [],
  timestamp: 0
};
