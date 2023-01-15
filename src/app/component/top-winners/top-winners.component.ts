import { MoviesService } from './../../service/movies.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { Studios } from 'src/app/service/movies.service';

@Component({
  selector: 'app-top-winners',
  templateUrl: './top-winners.component.html',
  styleUrls: ['./top-winners.component.scss'],
})
@Injectable({
  providedIn: 'platform',
})
export class TopWinnersComponent implements OnInit {
  public topWinners!: Studios;
  constructor(public moviesService: MoviesService) { }

  ngOnInit() {
    this.updateStudioWithWinCounts()
  }

  updateStudioWithWinCounts(){
    this.moviesService.getListStudioWithWinCount().subscribe((response) => {
      this.topWinners = response;
    });
  }

}
