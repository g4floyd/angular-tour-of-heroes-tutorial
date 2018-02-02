import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { Ng2CountdownComponent } from './ng2-countdown/ng2-countdown.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    Ng2CountdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
