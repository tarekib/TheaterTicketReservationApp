import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from 'src/app/login/login.component';
import { ScreeningComponent } from 'src/app/screening/screening.component';
import { TheaterListComponent } from 'src/app/theater-list/theater-list.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from 'src/app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TheaterComponent } from './theater/theater.component';
import { SeatsComponent } from './seats/seats.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieCardComponent } from './movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
      LoginComponent,
      TheaterListComponent,
      ScreeningComponent,
      LandingPageComponent,
      TheaterComponent,
      SeatsComponent,
      MoviesListComponent,
      MovieCardComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
