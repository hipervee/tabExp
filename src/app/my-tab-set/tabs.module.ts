import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgTranscludeDirective } from './ng-transclude.directive';
import { MyTabHeadingDirective } from './tab-heading.directive';
import { MyTabDirective } from './tab.directive';
import { MyTabsetComponent } from './tabset.component';
import { MyTabsetConfig } from './tabset.config';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NgTranscludeDirective,
    MyTabDirective,
    MyTabsetComponent,
    MyTabHeadingDirective
  ],
  exports: [
    MyTabDirective,
    MyTabsetComponent,
    MyTabHeadingDirective,
    NgTranscludeDirective
  ]
})
export class MyTabsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MyTabsModule,
      providers: [MyTabsetConfig]
    };
  }
}
