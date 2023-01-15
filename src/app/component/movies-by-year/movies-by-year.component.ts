import { Component, OnInit } from '@angular/core';
import { Movie, MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-movies-by-year',
  templateUrl: './movies-by-year.component.html',
  styleUrls: ['./movies-by-year.component.scss'],
})
export class MoviesByYearComponent implements OnInit {

  public yearFilter!: number;
  public moviesByYear!: Movie[];

  constructor(public moviesService: MoviesService) { }

  ngOnInit() {
  }

  updateMoviesByYear(year:number){
    this.moviesService.getListMoviesByYear(year).subscribe((response) => {
      this.moviesByYear = response;
    });
  }

  applyFilter(event: Event){
    this.updateMoviesByYear(this.yearFilter);
  }


}
