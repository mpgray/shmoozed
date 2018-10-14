import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://shmoozedbackendapi-env.p3uuygd4fp.us-east-2.elasticbeanstalk.com/';
const itempath = 'example/item';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class RESTService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  getExampleItems(): Observable<any> {
    return this.http.get(endpoint + itempath).pipe(
      map(this.extractData));
  }

  getExampleItem(id): Observable<any> {
    return this.http.get(endpoint + itempath + id).pipe(
      map(this.extractData));
  }

  addExampleItem (product): Observable<any> {
    console.log(product);
    return this.http.post<any>(endpoint + itempath, JSON.stringify(product), httpOptions).pipe(
      tap(_ => console.log(`added item w/ id=${product.id}`)),
      catchError(this.handleError<any>('addItem'))
    );
  }

  // Not implemented!!!
  updateExampleItem (id, product): Observable<any> {
    return this.http.put(endpoint + itempath + '/' + id, JSON.stringify(product), httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateItem'))
    );
  }

  // Not implemented!!!
  deleteExampleItem (id): Observable<any> {
    return this.http.delete<any>(endpoint + itempath + '/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<any>('deleteItem'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}


