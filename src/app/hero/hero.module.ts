import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeroFormComponent  } from './hero.component';
import { HighlightDirective } from './hero.directive';

@NgModule({
  declarations: [
    HeroFormComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [],
  providers: []
})
export class HeroModule { }
