import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class MortgageService {

    constructor(private http: HttpClient) {
        
    }
     
    getDataList() {
       return this.http.get('https://mocki.io/v1/547589c9-ff49-4232-a530-61e520c08343');
    }
    
}