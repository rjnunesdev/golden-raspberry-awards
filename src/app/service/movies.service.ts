import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export class YearWithMultipleWinner {
  year?: number;
  winnerCount?: number;
}

export class Movie {
  id?: number;
  year?: number;
  title?: string;
  studios?: string[];
  producers?: string[];
  winner?: boolean;
}

export class Sort {
  sorted?: boolean;
  unsorted?: boolean;
}

export class Pageable {
  sort?: Sort;
  pageSize?: number;
  pageNumber?: number;
  offset?: number;
  paged?: boolean;
  unpaged?: boolean;
}

export class DataMovie {
  content?: Movie[];
  pageable?: Pageable;
  totalElements?: number;
  last?: boolean;
  totalPages?: boolean;
  first?: boolean;
  sort?: Sort;
  number?: number;
  numberOfElements?: number;
  size?: number;
}

export class YearsWithMultipleWinner {
  years?: YearWithMultipleWinner[];
}

export class WinIntervalProducer {
  producer?: string;
  interval?: number;
  previousWin?: number;
  followingWin?: number;
}

export class MaxMinWinIntervalProducers {
  min?: WinIntervalProducer[];
  max?: WinIntervalProducer[];
}

export class Studio {
  name?: string;
  winCount?: number;
}
export class Studios{
  studios?: Studio[]
}

@Injectable({
  providedIn: 'any'
})
export class MoviesService {

  endpoint = `${environment.api}/movies`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient) { }

  getListMovies(page: number, size: number, winner:boolean, year?: number): Observable<DataMovie> {
    let params: any = {
      page,
      size,
      winner
    }

    if(year) {
      params['year'] = year;
    }
    
    return this.httpClient.get<DataMovie>(this.endpoint, {params}).pipe(
      tap(_ => console.log('Movies retrieved!')),
      catchError(this.handleError<DataMovie>('Get list movies'))
    )
  }

  getListYearsWithMultipleWinners(): Observable<YearsWithMultipleWinner> {
    let params = {
      projection: 'years-with-multiple-winners'
    }
    return this.httpClient.get<YearsWithMultipleWinner>(this.endpoint, {params}).pipe(
      tap(_ => console.log('Years retrieved!')),
      catchError(this.handleError<YearsWithMultipleWinner>('Get years'))
    )
  }

  getListStudioWithWinCount(): Observable<Studios> {
    let params = {
      projection: 'studios-with-win-count'
    }
    return this.httpClient.get<Studios>(this.endpoint, {params}).pipe(
      tap(_ => console.log('Studios retrieved!')),
      catchError(this.handleError<Studios>('Get studios'))
    )
  }

  
  getListMaxMinWinIntervalProducers(): Observable<MaxMinWinIntervalProducers> {
    let params = {
      projection: 'max-min-win-interval-for-producers'
    }
    return this.httpClient.get<MaxMinWinIntervalProducers>(this.endpoint, {params}).pipe(
      tap(_ => console.log('Producers retrieved!')),
      catchError(this.handleError<MaxMinWinIntervalProducers>('Get producers'))
    )
  }

  getListMoviesByYear(year: number): Observable<any[]> {
    let params = {
      winner: true,
      year
    }
    return this.httpClient.get<Movie[]>(this.endpoint, {params}).pipe(
      tap(_ => console.log('Movies retrieved!', _)),
      catchError(this.handleError<Movie[]>('Get list movies'))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }


  

}
