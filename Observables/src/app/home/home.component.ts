import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numObservableSubscription: Subscription;
  customObservableSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000)
      .map((data: number) => {
        return data * 2;
      });
    this.numObservableSubscription = myNumbers.subscribe(
      (num: number) => {
        console.log(`Number generated is ${num}`);
      }
    );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('First package');
      }, 2000);
      setTimeout(() => {
        observer.next('Second package');
      }, 4000);
      // setTimeout(() => {
      //   observer.error('This does not work anymore!');
      // }, 5000);
      setTimeout(() => { observer.complete(); }, 6000);
      setTimeout(() => {
        observer.next('Third package');
      }, 8000);
    });

    this.customObservableSubscription = myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => { console.log('Observable has been completed.'); }
    );
  }

  ngOnDestroy(): void {
    this.numObservableSubscription.unsubscribe();
    this.customObservableSubscription.unsubscribe();
  }
}
