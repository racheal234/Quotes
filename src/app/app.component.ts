import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
quotes = [
 new Quote(1, 'I still think I am the greatest','Kanye west', new Date (2018,3,14) ),
 new Quote(2, 'What do I wear in bed? Why Chanel No 5','Marylin Monroe',new Date(2018,6,9) ),
 new Quote(4, 'Learning never exhausts the mind','Socrates',new Date(2018/1/12) ),
 new Quote(5, 'speed so fast i felt like i was drunk','Jonas Blue',new Date(2018,2,14) ),
]


}
