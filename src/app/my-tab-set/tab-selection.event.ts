import { MyTabDirective } from './tab.directive';
export class TabSelectionEvent {
    prevTab: MyTabDirective;
    currentTab: MyTabDirective;

    constructor(prev, current) {
        this.prevTab = prev;
        this.currentTab = current;
    }
}