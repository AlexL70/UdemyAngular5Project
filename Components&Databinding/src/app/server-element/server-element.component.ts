import { Component, OnInit, Input, ViewEncapsulation, OnChanges,
  SimpleChanges,  DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated  // None, Native
})
export class ServerElementComponent implements
  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') public element: { type: string, name: string, content: string };
  @Input() public name: string;
  @ViewChild('heading') header: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    //  Here HTML DOM elements of the component are not available (not initialized yet)
    console.log(`Text content: ${(<HTMLDivElement>this.header.nativeElement).textContent}`);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    //  Here HTML DOM elements of the component are available (initialized)
    console.log(`Text content: ${(<HTMLDivElement>this.header.nativeElement).textContent}`);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }
}
