import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroModule  } from './hero';
import { AppRouterModule } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule,
  ],
  exports: [HeroModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
