import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.css']
})
export class HeartComponent implements OnInit {
  @Input() number: string;

  constructor() { }

  ngOnInit() {
  }

}
