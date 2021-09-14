import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserDto } from 'src/_models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.apiUrl + 'Login';
  public IsLoggedIn: boolean;

  constructor(private httpClient: HttpClient) { }

  login(user: UserDto) {
    return this.httpClient.post(this.baseUrl + '/Authenticate', user)
      .pipe(
        map((response: UserDto) => {
          const user = response;
          if (user) {
            localStorage.setItem('Username', user.Username);
            localStorage.setItem('IsAdmin', user.IsAdmin ? 'true' : 'false');
            this.IsLoggedIn = true;
          }
        })
      );
  }
}
