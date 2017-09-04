import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clover',
  templateUrl: './clover.component.html',
  styleUrls: ['./clover.component.css']
})
export class CloverComponent implements OnInit {
  @Input() number: string;

  constructor() { }

  ngOnInit() {
  }

}
