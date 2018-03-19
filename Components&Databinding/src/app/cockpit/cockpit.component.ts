import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // tslint:disable-next-line:no-output-rename
  @Output('svrCreated') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // tslint:disable-next-line:no-output-rename
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInputElement: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInputElement.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInputElement: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInputElement.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
