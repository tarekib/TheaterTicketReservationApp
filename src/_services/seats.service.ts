import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SeatDto } from 'src/_models/seat';

@Injectable({
  providedIn: 'root'
})
export class SeatsService {
  baseUrl = environment.apiUrl + 'SeatReservation';
  constructor(private httpClient: HttpClient) { }

  getReservedSeats(screeningId: number) {
    return this.httpClient.get<SeatDto[]>(this.baseUrl + `/Reserved?screeningId=${screeningId}`);
  }

  reserveSeats(seats: SeatDto[]) {
    return this.httpClient.post(this.baseUrl + '/Reserve', seats);
  }
}
