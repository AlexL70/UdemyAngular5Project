import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //  "snapshot" is a static object which is available when you go to the route
    //  and create an object first time.
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    //  "route.params" is an Observable. It is an object, which fires an event
    //  whenever parameters change. So it could be used to move to the next
    //  object (user in this case) without actually recreate the object when
    //  just a parameter values change
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params.id;
        this.user.name = params.name;
      }
    );
  }

  //  This code is actually unnecessary. Angular will do it anyway for "params"
  //  Observable. But if you create your own observables, it is a good idea to
  //  clean up them after they are not needed anymore.
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
