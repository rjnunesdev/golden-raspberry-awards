import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataMovie, MaxMinWinIntervalProducers, Movie, MoviesService, Studio, Studios, WinIntervalProducer, YearsWithMultipleWinner } from '../service/movies.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
@Injectable({
  providedIn: 'platform',
 })
export class DashboardPage implements OnInit {
  public folder!: string;

  public movies!: DataMovie;

  constructor(private activatedRoute: ActivatedRoute, public moviesService: MoviesService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  ionViewDidEnter() {
    
    this.updateMovies();
  }
  
  updateMovies(page: number = 1, size: number = 15, winner: boolean = true, year?: number){
    this.moviesService.getListMovies(page, size, winner, year).subscribe((response) => {
      this.movies = response;
    });
  }

}

