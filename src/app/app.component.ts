import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  id: string = '';

  constructor(private router: Router) {
  }

  navigate(link: string) {
    //this.router.navigateByUrl(link+'/15');
    this.router.navigate([link,this.id]);
  }
}
