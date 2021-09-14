import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TheaterDto } from 'src/_models/theater';
import { TheatersService } from 'src/_services/theaters.service';

@Component({
  selector: 'app-theater-list',
  templateUrl: './theater-list.component.html',
  styleUrls: ['./theater-list.component.scss']
})
export class TheaterListComponent implements OnInit {

  theatersList: TheaterDto[];

  constructor(
    private theaterService: TheatersService) { }

  ngOnInit() {
    this.getTheaters();
  }

  getTheaters() {
    this.theaterService.getTheaters().subscribe(
      (data) => { this.theatersList = data; }
    );
  }

}
