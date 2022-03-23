import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/services/service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  myModel: any = {};  

  constructor(private svc: APIService) { }

  ngOnInit() {
  }

  Agree(){
    this.myModel = {
      "userName": this.myModel.userName,
      "password": this.myModel.password,
      "name": this.myModel.name,
      "lastName": this.myModel.lastName,
      "nickName": this.myModel.nickName,
      "age": this.myModel.age,
      "gender": this.myModel.gender,
      "category": this.myModel.category,
      "brithDate": this.myModel.brithDate,      
      "address": this.myModel.address,
      "description": this.myModel.description,    
    }
    console.log(this.myModel);

    this.svc.CreateAccount(this.myModel).subscribe((result: any) => {
      console.log(result);
    }, error => {
      console.log(error);
    });
  }
}
