import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aikido Shodokan';
  birthday = new Date(1990, 5, 10);
  jsonval = {name:'John', age:'22', address:{a1:'Mumbai', a2:'Maharashtra'}};
  days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat","Sun"];
}
