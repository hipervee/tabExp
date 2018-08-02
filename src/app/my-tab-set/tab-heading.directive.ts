import { Directive, TemplateRef } from '@angular/core';

import { MyTabDirective } from './tab.directive';

/** Should be used to mark <ng-template> element as a template for tab heading */
@Directive({ selector: '[myTabHeading]' })
export class MyTabHeadingDirective {
  templateRef: TemplateRef<any>;

  constructor(templateRef: TemplateRef<any>, tab: MyTabDirective) {
    tab.headingRef = templateRef;
  }
}
