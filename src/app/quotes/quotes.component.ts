import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

quotes = [
 new Quote(1, 'I still think I am the greatest','Kanye west', new Date (2018,3,14) ),
 new Quote(2, 'What do I wear in bed? Why Chanel No 5','Marylin Monroe',new Date(2018,6,9) ),
 new Quote(4, 'Learning never exhausts the mind','Socrates',new Date(2018/1/12) ),
 new Quote(5, 'speed so fast i felt like i was drunk','Jonas Blue',new Date(2018,2,14) ),
]


completeQuote(isComplete,index){
       if (isComplete){
           this.quotes.splice(index,1);
           }
           }
toogleDetails(index){
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
addNewQuote(quote){
        let quoteLength = this.quotes.length;
        quote.id=quoteLength+1;
        quote.completeDate = new Date(quote.completeDate)
        this.quotes.push(quote)

    }

  constructor() { }

  ngOnInit() {
  }

}
