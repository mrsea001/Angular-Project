import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Project';
  visible=true;
  counter=0;
  myFavLang = [
    {'name':'html','type':'forntend'},
    {'name':'css','type':'forntend'},
    {'name':'js','type':'forntend'},
    {'name':'.netcore','type':'backend'},
  ];
  username="Mansoor";
  constructor(){

  }
  toggelOddEven(){
    this.visible=!this.visible;
    this.counter++;
    
  }
}
