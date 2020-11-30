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
  newServerContent = '';

  constructor() { }


  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent});
  }

  onAddBluePrint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent});
  }

}
