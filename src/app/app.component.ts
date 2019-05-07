import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';

import { ProgressbarConfig } from 'ngx-bootstrap/progressbar';
import { interval } from 'rxjs/observable/interval';
import {Observable} from "rxjs";

export function getProgressbarConfig(): ProgressbarConfig {
  return Object.assign(new ProgressbarConfig(), { animate: true, striped: true, max: 150 });
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: ProgressbarConfig, useFactory: getProgressbarConfig }]
})
export class AppComponent implements OnInit {

  title = 'app';
  
  subscribe: Subscription;
  valorProgress = 0;
  

  


  ngOnInit(): void {
    //emit value in sequence every 1 second
    const source2 = interval(10);
    //output: 0,1,2,3,4,5....
    const subscribe2 = source2.subscribe(val => console.log("subscribe2= "+val));
   
    //let t= Observable.interval(1000).take(10).filter(i => i%2==0);

    //t.subscribe(i => console.log("hello "+i));
   // t.subscribe(i => console.log("bye "+i+"\n"));

   let source =Observable.interval(100).take(150);//.do(val => this.valorProgress +=1 );
   const subscribeBar = source.subscribe(val => this.valorProgress +=1 );// subscribe é o gatilho
   // for (let index = 0; index < 150; index++) {
   // source.subscribe  
     // source.subscribe(val => this.valorProgress +=1 );
     subscribe2.unsubscribe();
    //}
  }
}
//emit value in sequence every 1 second

//output: 0,1,2,3,4,5....



