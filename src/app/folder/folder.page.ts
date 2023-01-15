import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataMovie, MaxMinWinIntervalProducers, Movie, MoviesService, Studio, Studios, WinIntervalProducer, YearsWithMultipleWinner } from '../service/movies.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
@Injectable({
  providedIn: 'platform',
 })
export class FolderPage implements OnInit {
  public folder!: string;
  public multipleWinners!: YearsWithMultipleWinner;
  public winIntervalProducer!: MaxMinWinIntervalProducers;
  public moviesByYear!: Movie[];
  public topWinners!: Studios;
  public movies!: DataMovie;
  private defaultYear!: number;
  public yearFilter!: number;

  constructor(private activatedRoute: ActivatedRoute, public moviesService: MoviesService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.defaultYear = 2017;
  }

  ionViewDidEnter() {
    this.updateYearsWithMultipleWinners();
    this.updateMaxMinWinIntervalProducers();
    this.updateMoviesByYear()
    this.updateMovies();
    this.updateStudioWithWinCounts();
  }

  updateYearsWithMultipleWinners(){
    this.moviesService.getListYearsWithMultipleWinners().subscribe((response) => {
      this.multipleWinners = response;
    });
  }
  updateMaxMinWinIntervalProducers(){
    this.moviesService.getListMaxMinWinIntervalProducers().subscribe((response) => {
      this.winIntervalProducer = response;
    });
  }
  updateMoviesByYear(year:number = this.defaultYear){

    this.moviesService.getListMoviesByYear(year).subscribe((response) => {
      this.moviesByYear = response;
    });
  }
  updateMovies(page: number = 1, size: number = 15, winner: boolean = true, year?: number){
    this.moviesService.getListMovies(page, size, winner, year).subscribe((response) => {
      this.movies = response;
    });
  }
  updateStudioWithWinCounts(){
    this.moviesService.getListStudioWithWinCount().subscribe((response) => {
      this.topWinners = response;
    });
  }
  applyFilter(event: Event){
    this.updateMoviesByYear(this.yearFilter);
  }

}
