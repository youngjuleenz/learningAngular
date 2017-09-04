import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-diamond',
  templateUrl: './diamond.component.html',
  styleUrls: ['./diamond.component.css']
})
export class DiamondComponent implements OnInit {
  @Input() number: string;

  constructor() { }

  ngOnInit() {
  }

}
