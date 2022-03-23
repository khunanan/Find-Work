import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { promise } from 'selenium-webdriver';
@Injectable({
    providedIn: 'root'
  })
  export class APIService {
    private readonly url: string = "https://localhost:44397/Function/"; // dev url
    constructor(private http: HttpClient) {
      console.log('Create CloudSyncProvider Provider');
    }

    public CreateAccount(mymodel: any) {
      console.log(mymodel);
      return this.http.post(this.url + "CreateAccount", mymodel);

    } 
  
    public GetDataEngineerById(id: any) {
      return this.http.get(this.url + "GetDataEngineerById/", id);
    }
  }