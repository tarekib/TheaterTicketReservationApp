import { Component, Input, OnInit } from '@angular/core';
import { TheaterDto } from 'src/_models/theater';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.scss']
})
export class TheaterComponent implements OnInit {
  @Input() theater: TheaterDto;
  constructor() { }

  ngOnInit() {
  }

}
