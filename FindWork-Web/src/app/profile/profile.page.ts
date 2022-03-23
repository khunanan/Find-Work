import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/services/service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor( private svc: APIService) { }

  ngOnInit() {
  }
  // GetdataOrder() {
  //   this.svc.GetDataEngineerById(id).subscribe(it => {
  //     console.log(it);
  //     if (it) {
  //       this.data = it
  //     }
  //   });
  // }
}
