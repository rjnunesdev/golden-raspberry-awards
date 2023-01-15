import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { HttpClientModule } from '@angular/common/http';
import { TopWinnersComponent } from '../component/top-winners/top-winners.component';
import { MoviesByYearComponent } from '../component/movies-by-year/movies-by-year.component';
import { MultipleWinnersComponent } from '../component/multiple-winners/multiple-winners.component';
import { WinIntervalProducerComponent } from '../component/win-interval-producer/win-interval-producer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    DashboardPageRoutingModule
  ],
  declarations: [
    DashboardPage, 
    MoviesByYearComponent, 
    MultipleWinnersComponent,
    TopWinnersComponent, 
    WinIntervalProducerComponent
  ]
})
export class DashboardPageModule {}
