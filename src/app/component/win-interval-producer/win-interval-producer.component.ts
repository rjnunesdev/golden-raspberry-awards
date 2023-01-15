import { Component, OnInit } from '@angular/core';
import { MaxMinWinIntervalProducers, MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-win-interval-producer',
  templateUrl: './win-interval-producer.component.html',
  styleUrls: ['./win-interval-producer.component.scss'],
})
export class WinIntervalProducerComponent implements OnInit {

  public winIntervalProducer!: MaxMinWinIntervalProducers;

  constructor(public moviesService: MoviesService) { }

  ngOnInit() {
    this.updateMaxMinWinIntervalProducers();
  }
  
  updateMaxMinWinIntervalProducers(){
    this.moviesService.getListMaxMinWinIntervalProducers().subscribe((response) => {
      this.winIntervalProducer = response;
    });
  }


}
