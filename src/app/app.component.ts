import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
quotes: string[];

constructor(){

this.quotes = ["Learning never exhausts the mind","Lord make me an instrument of your peace where there is hatred
let me sow love","I still think I am the greatest" ];
}
}
