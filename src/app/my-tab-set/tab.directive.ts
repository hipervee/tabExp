import {
  Directive,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  TemplateRef,
  OnInit,
  OnDestroy,
  ElementRef,
  Renderer2
} from '@angular/core';
import { MyTabsetComponent } from './tabset.component';

@Directive({ selector: 'my-tab, [my-tab]' })
export class MyTabDirective implements OnInit, OnDestroy {
  /** tab header text */
  @Input() heading: string;
  /** tab id. The same id with suffix '-link' will be added to the corresponding &lt;li&gt; element  */
  @HostBinding('attr.id')
  @Input() id: string;
  /** if true tab can not be activated */
  @Input() disabled: boolean;
  /** if true tab can be removable, additional button will appear */
  @Input() removable: boolean;
  /** if set, will be added to the tab's class attribute. Multiple classes are supported. */
  @Input()
  get customClass(): string {
    return this._customClass;
  }

  set customClass(customClass: string) {
    if (this.customClass) {
      this.customClass.split(' ').forEach((cssClass: string) => {
        this.renderer.removeClass(this.elementRef.nativeElement, cssClass);
      });
    }

    this._customClass = customClass ? customClass.trim() : null;

    if (this.customClass) {
      this.customClass.split(' ').forEach((cssClass: string) => {
        this.renderer.addClass(this.elementRef.nativeElement, cssClass);
      });
    }
  }

  /** tab active state toggle */
  @HostBinding('class.active')
  @Input()
  get active(): boolean {
    return this._active; 
  }

  set active(active: boolean) {
    if (this._active === active) {
      return;
    }
    // this.tabset.tabs.forEach(o => console.log('EXISTS', !!o.validate));
    if ((this.disabled && active) || !active) {
      if (this._active && !active) {
        this.deselect.emit(this);
        this._active = active;
      }

      return;
    }

    this._active = active;
    this.select.emit(this);
    this.tabset.tabs.forEach((tab: MyTabDirective) => {
      if (tab !== this) {
        tab.active = false;
      }
    });
  }

  /** fired when tab became active, $event:Tab equals to selected instance of Tab component */
  @Output() select: EventEmitter<MyTabDirective> = new EventEmitter();
  /** fired when tab became inactive, $event:Tab equals to deselected instance of Tab component */
  @Output() deselect: EventEmitter<MyTabDirective> = new EventEmitter();
  /** fired before tab will be removed, $event:Tab equals to instance of removed tab */
  @Output() removed: EventEmitter<MyTabDirective> = new EventEmitter();

  @HostBinding('class.tab-pane') addClass = true;

  headingRef: TemplateRef<any>;
  tabset: MyTabsetComponent;
  protected _active: boolean;
  protected _customClass: string;

  constructor(
    tabset: MyTabsetComponent,
    public elementRef: ElementRef,
    public renderer: Renderer2
  ) {
    this.tabset = tabset;
    this.tabset.addTab(this);
  }

  ngOnInit(): void {
    this.removable = this.removable;
  }

  ngOnDestroy(): void {
    this.tabset.removeTab(this, { reselect: false, emit: false });
  }
}
