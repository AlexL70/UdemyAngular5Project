import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInputElement: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInputElement.value,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint(nameInputElement: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInputElement.value,
      serverContent: this.newServerContent
    });
  }
}
