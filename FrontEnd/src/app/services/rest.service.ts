import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://shmoozedbackendapi-env.p3uuygd4fp.us-east-2.elasticbeanstalk.com/';
const itempath = 'example/item';
const buyerpath = 'item/buyer';
const sellerpath = 'item/seller';
const userpath = 'user';
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
  //////////////////
// Buyer Rest    //
//////////////////
  getBuyerItems(): Observable<any> {
    return this.http.get(endpoint + buyerpath).pipe(
      map(this.extractData));
  }

  getBuyerItem(id): Observable<any> {
    return this.http.get(endpoint + buyerpath + id).pipe(
      map(this.extractData));
  }

  addBuyerItems (product): Observable<any> {
    console.log(product);
    return this.http.post<any>(endpoint + buyerpath, JSON.stringify(product), httpOptions).pipe(
      tap(_ => console.log(`added item w/ id=${product.id}`)),
      catchError(this.handleError<any>('addItem'))
    );
  }

  updateBuyerItems (id, product): Observable<any> {
    return this.http.put(endpoint + buyerpath + '/' + id, JSON.stringify(product), httpOptions).pipe(
      tap(_ => console.log(`updated item id=${id}`)),
      catchError(this.handleError<any>('updateItem'))
    );
  }

  deleteBuyerItems (id): Observable<any> {
    return this.http.delete<any>(endpoint + buyerpath + '/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<any>('deleteItem'))
    );
  }
///////////////////////
// End Buyer        //
/////////////////////

  //////////////////
// Seller REST   //
//////////////////
  getSellerItems(): Observable<any> {
    return this.http.get(endpoint + sellerpath).pipe(
      map(this.extractData));
  }

  getSellerItem(id): Observable<any> {
    return this.http.get(endpoint + sellerpath + id).pipe(
      map(this.extractData));
  }

  addSellerItem (product): Observable<any> {
    console.log(product);
    return this.http.post<any>(endpoint + sellerpath, JSON.stringify(product), httpOptions).pipe(
      tap(_ => console.log(`added item w/ id=${product.id}`)),
      catchError(this.handleError<any>('addItem'))
    );
  }

  updateSellerItem (id, product): Observable<any> {
    return this.http.put(endpoint + sellerpath + '/' + id, JSON.stringify(product), httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateItem'))
    );
  }

  deleteSellerItem (id): Observable<any> {
    return this.http.delete<any>(endpoint + userpath + '/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<any>('deleteItem'))
    );
  }
///////////////////////
// END Seller       //
//////////////////////

//////////////////
// User REST    //
//////////////////
  getUsers(): Observable<any> {
    return this.http.get(endpoint + userpath).pipe(
      map(this.extractData));
  }

  getUser(id): Observable<any> {
    return this.http.get(endpoint + userpath + id).pipe(
      map(this.extractData));
  }

  addUser (product): Observable<any> {
    console.log(product);
    return this.http.post<any>(endpoint + userpath, JSON.stringify(product), httpOptions).pipe(
      tap(_ => console.log(`added item w/ id=${product.id}`)),
      catchError(this.handleError<any>('addItem'))
    );
  }

  updateUser (id, product): Observable<any> {
    return this.http.put(endpoint + userpath + '/' + id, JSON.stringify(product), httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateItem'))
    );
  }

  deleteUser (id): Observable<any> {
    return this.http.delete<any>(endpoint + userpath + '/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<any>('deleteItem'))
    );
  }
///////////////////////
// END User         //
//////////////////////
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


