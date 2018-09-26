import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlipModule } from 'ngx-Flip';
import { HttpClientModule } from '@angular/common/http';
import { CardsService } from './cards/cards.service'

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    FlipModule,
    HttpClientModule
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
