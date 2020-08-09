import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-degats-toggle',
  templateUrl: './degats-toggle.component.html',
  styleUrls: ['./degats-toggle.component.scss'],
})
export class DegatsToggleComponent implements OnInit {
  @Output() changed = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}
}
