import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    public CommonUrlNew: string ;
    public InVoiceURL: string ;
    public InVoiceControllerURL: string ;
    public InVoicePrint: string ;
    public TokenUrl: string ;
  constructor(private http: HttpClient ) { this.CommonUrlNew = environment.CommonUrl;
                                           this.InVoiceURL = environment.InvoiceURL; 
                                           this.InVoiceControllerURL = environment.InvoiceContrURL;
                                           this.InVoicePrint = environment.InvoicePrint;
                                           this.TokenUrl = environment.TokenUrl;
   }

  getService(url: string): Observable<any> {
    url = this.CommonUrlNew + url;
    return this.http.get(url).pipe(catchError(this.handleError)); 
  }
  getProduct(url: string, id: number): Observable<any> {
    return this.http.get(url + id);
  }
  addProduct(url: string, model: any): Observable<any> {
    url = this.CommonUrlNew + url;
    console.log(model);
    return this.http.post<any>(url, model, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  updateProduct(url: string, product): Observable<any> {
    url = this.CommonUrlNew + url;
    return this.http.put(url , JSON.stringify(product), httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  deleteProduct(url: string, id: number): Observable<any> {
    return this.http.delete<any>(url + id, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
        console.error('Client side error : ', errorResponse.error.message);
    } else {
      console.error('Server Side Error: ', errorResponse);
    }
    return throwError('There is problem with service. We are notified & Working on it. Please try again later.');
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
}
