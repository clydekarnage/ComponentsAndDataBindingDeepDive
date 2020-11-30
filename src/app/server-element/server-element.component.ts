import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input() element: {type: string | undefined, name: string | undefined, content: string | undefined};

  constructor() { }

  ngOnInit(): void {
  }

}
