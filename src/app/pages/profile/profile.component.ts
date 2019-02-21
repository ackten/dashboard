import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../@core/oauth2/auth.service';


@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  makeProfileArray(obj): string[] {
    const keyPropArray = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        keyPropArray.push(key + ': ' + JSON.stringify(obj[key]));
      }
    }
    return keyPropArray;
  }

}
