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


  constructor(private activatedRoute: ActivatedRoute, public moviesService: MoviesService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  ionViewDidEnter() {
    
  }

}

