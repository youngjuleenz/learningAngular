import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spade',
  templateUrl: './spade.component.html',
  styleUrls: ['./spade.component.css']
})
export class SpadeComponent implements OnInit {
  @Input() number: string;

  constructor() { }

  ngOnInit() {
  }

}
