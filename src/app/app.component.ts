import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: string = '';

  constructor(private router: Router) {
  }

  setData(data:string){
    this.data=data;
  }
}
