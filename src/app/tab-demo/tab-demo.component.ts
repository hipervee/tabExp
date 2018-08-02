import { MyTabDirective } from './../my-tab-set/tab.directive';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MyTabsetComponent } from '../my-tab-set/tabset.component';
import { TabSelectionEvent } from '../my-tab-set/tab-selection.event';

@Component({
  selector: 'app-tab-demo',
  templateUrl: './tab-demo.component.html',
  styleUrls: ['./tab-demo.component.css']
})
export class TabDemoComponent implements OnInit {
  @ViewChild('staticTabs') staticTabs: MyTabsetComponent;
  model = '';
  selectTab(tab_id: number) {
    this.staticTabs.tabs[tab_id].active = true;
  }
  constructor() { }

  ngOnInit() {
  }

  tabSelecting(obj: TabSelectionEvent) {
    console.log('here', obj);
    this.validate(obj.currentTab);
  }

  validate(tab: MyTabDirective) {
    tab.active = true;
  }
}
