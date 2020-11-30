import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string | undefined, serverContent: string | undefined}>();
  // tslint:disable-next-line:no-output-rename
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName: string | undefined, serverContent: string | undefined}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }


  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

  onAddBluePrint() {
    this.bluePrintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

}
