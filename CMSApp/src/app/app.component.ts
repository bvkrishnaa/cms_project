import { Component } from '@angular/core';
import { CMSGeneralInfo } from '../app/CMSGeneralInfo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CMSApp';
  Login:CMSGeneralInfo.ICMSGeneralInfo;
  constructor(){
   this.Login={
     Username:'krishna',
     Password:'14522'
   }
  }
}