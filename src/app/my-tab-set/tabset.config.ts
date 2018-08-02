import { Injectable } from '@angular/core';

@Injectable()
export class MyTabsetConfig {
  /** provides default navigation context class: 'tabs' or 'pills' */
  type = 'tabs';
}
