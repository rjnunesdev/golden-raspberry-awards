import { Component, OnInit } from '@angular/core';
import { MoviesService, YearsWithMultipleWinner } from 'src/app/service/movies.service';

@Component({
  selector: 'app-multiple-winners',
  templateUrl: './multiple-winners.component.html',
  styleUrls: ['./multiple-winners.component.scss'],
})
export class MultipleWinnersComponent implements OnInit {

  public multipleWinners!: YearsWithMultipleWinner;

  constructor(public moviesService: MoviesService) { }

  ngOnInit() {
    this.updateYearsWithMultipleWinners();
  }

  updateYearsWithMultipleWinners(){
    this.moviesService.getListYearsWithMultipleWinners().subscribe((response) => {
      this.multipleWinners = response;
    });
  }

}
