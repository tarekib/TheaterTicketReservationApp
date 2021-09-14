import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TheaterDto } from 'src/_models/theater';

@Injectable({
  providedIn: 'root'
})
export class TheatersService {
  baseUrl = environment.apiUrl + 'Theaters';

  constructor(private httpClient: HttpClient) { }

  getTheaters() {
    return this.httpClient.get<TheaterDto[]>(this.baseUrl + '/All');
  }
}
