import { MyTabsModule } from './my-tab-set/tabs.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TabDemoComponent } from './tab-demo/tab-demo.component';
import { NestedComponent } from './nested/nested.component';


@NgModule({
  declarations: [
    AppComponent,
    TabDemoComponent,
    NestedComponent
  ],
  imports: [
    BrowserModule,
    MyTabsModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
