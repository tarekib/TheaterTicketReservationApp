import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScreeningDto } from 'src/_models/screening';
import { SeatDto } from 'src/_models/seat';
import { MoviesService } from 'src/_services/movies.service';
import { SeatsService } from 'src/_services/seats.service';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss']
})
export class SeatsComponent implements OnInit, AfterViewInit {
  movieId: number;
  private sub: any;
  reservedSeats: SeatDto[];
  rows: number[];
  seatsPerRow: number[];
  isSelected = false;
  selectedSeats: SeatDto[] = [];
  screenings: ScreeningDto[];
  selectedScreeningId: number;
  confirmed = false;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private seatsService: SeatsService,
    private elementRef: ElementRef
  ) {
    this.rows = [1, 2, 3, 4, 5, 6];
    this.seatsPerRow = [1, 2, 3, 4, 5, 6, 7, 8];
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.movieId = +params['movieId'];
    });
    this.getScreenings();
  }

  // should find an alternative with ng-class / this is not a best practice in angular
  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('.container').addEventListener('click', (e) => {
      if (e.target.classList.contains('seat') && !e.target.classList.contains('seat occupied')) {
        e.target.classList.toggle('selected');
      }
    });
  }

  getScreenings() {
    this.moviesService.getMovieScreenings(this.movieId).subscribe((data) => {
      this.screenings = data;
    });
  }

  getReservedSeats() {
    this.seatsService.getReservedSeats(this.selectedScreeningId).subscribe((data) => {
      this.reservedSeats = data;
      this.isSelected = true;
    });
  }

  clickSeat(rowNumber: number, indexNumber: number) {
    const index = this.selectedSeats.findIndex(x => x.index === indexNumber && x.row === rowNumber);
    if (index > -1) {
      this.selectedSeats.splice(index, 1);
    } else {
      const seat: SeatDto = {
        id: 0,
        index: indexNumber,
        row: rowNumber,
        reserved: true,
        screeningId: this.selectedScreeningId,
        userId: 5
      };
      this.selectedSeats.push(seat);
    }
  }

  confirmSeats() {
    this.confirmed = true;
  }

  reserveSeats() {
    this.seatsService.reserveSeats(this.selectedSeats).subscribe();
  }

  discardAll() {
    this.selectedSeats = [];
  }

  styleSeat(row: number, index: number) {
    if (this.isSelected) {
      if (this.reservedSeats.some(x => x.row === row && x.index === index)) {
        return 'seat occupied';
      } else if (this.selectedSeats.some(x => x.row === row && x.index === index) && this.confirmed === true) {
        return 'seat confirmed';
      } else {
        return 'seat';
      }
    }
  }
}


