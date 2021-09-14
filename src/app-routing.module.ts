import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './app/landing-page/landing-page.component';
import { LoginComponent } from './app/login/login.component';
import { MoviesListComponent } from './app/movies-list/movies-list.component';
import { ScreeningComponent } from './app/screening/screening.component';
import { SeatsComponent } from './app/seats/seats.component';
import { TheaterListComponent } from './app/theater-list/theater-list.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: LandingPageComponent, canActivate: [AuthGuard], },
    { path: 'theaters', component: TheaterListComponent, canActivate: [AuthGuard], },
    { path: 'movies/:theaterId', component: MoviesListComponent, canActivate: [AuthGuard], },
    { path: 'screenings', component: ScreeningComponent, canActivate: [AuthGuard], },
    { path: 'seats/:movieId', component: SeatsComponent, canActivate: [AuthGuard], }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [LoginComponent, TheaterListComponent, ScreeningComponent, SeatsComponent];
