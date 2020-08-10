import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-input',
  templateUrl: './edit-input.component.html',
  styleUrls: ['./edit-input.component.css'],
})
export class EditInputComponent implements OnInit {
  @Input() data: number;
  @Input() dataType: string;
  @Input() isPercent = false;
  @Output() focusOut: EventEmitter<number> = new EventEmitter<number>();
  editMode = false;
  constructor() {}

  textCss = {
    base: 'basic-stat',
    boost: 'boost-stat',
    boostingame: 'boost-ingame-stat',
    final: 'stat-final',
  };

  ngOnInit() {}

  onFocusOut() {
    this.focusOut.emit(this.data ? this.data : 0);
  }
}
