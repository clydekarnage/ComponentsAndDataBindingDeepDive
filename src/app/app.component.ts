import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];

  onServerAdded(serverData: {serverName: string | undefined, serverContent: string | undefined}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(bluePrintData: {serverName: string | undefined, serverContent: string | undefined}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverName
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroy() {
    this.serverElements.splice(0, 1);
  }

  // tslint:disable-next-line:member-ordering
  oddNumbers: number[] = [];
  // tslint:disable-next-line:member-ordering
  evenNumbers: number[] = [];

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }



}
