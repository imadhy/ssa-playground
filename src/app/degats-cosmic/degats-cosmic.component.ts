import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-degats-cosmic',
  templateUrl: './degats-cosmic.component.html',
  styleUrls: ['./degats-cosmic.component.scss'],
})
export class DegatsCosmicComponent implements OnInit {
  @Output() updateDegatsCosmic: EventEmitter<any> = new EventEmitter<any>();

  basicAttr = {
    atq_c: {
      total: () =>
        this.basicAttr.atq_c.base +
        this.basicAttr.atq_c.boost +
        this.basicAttr.atq_c.boost2,
      base: 3000,
      boost: 8000,
      boost2: 4000,
    },
  };

  combatAttr = {
    deg_c: {
      total: () => this.combatAttr.deg_c.base + this.combatAttr.deg_c.boost,
      base: 25,
      boost: 3,
    },
    penetration_c: 36,
  };

  base = 'base';
  boost = 'boost';
  boostingame = 'boostingame';
  final = 'final';

  constructor() {}

  ngOnInit(): void {}

  saveValue(value, obj, path) {
    switch (obj) {
      case 'basicAttr':
        this.setValue(path, value, this.basicAttr);
        this.updateDegatsCosmic.emit(['basicAttr', this.basicAttr]);
        break;
      case 'combatAttr':
        this.setValue(path, value, this.combatAttr);
        this.updateDegatsCosmic.emit(['combatAttr', this.combatAttr]);
        break;
    }
  }

  setValue(propertyPath, value, obj) {
    // this is a super simple parsing, you will want to make this more complex to handle correctly any path
    // it will split by the dots at first and then simply pass along the array (on next iterations)
    const properties = Array.isArray(propertyPath)
      ? propertyPath
      : propertyPath.split('.');

    // Not yet at the last property so keep digging
    if (properties.length > 1) {
      // The property doesn't exists OR is not an object (and so we overwritte it) so we create it
      if (
        !obj.hasOwnProperty(properties[0]) ||
        typeof obj[properties[0]] !== 'object'
      ) {
        obj[properties[0]] = {};
      }
      // We iterate.
      return this.setValue(properties.slice(1), value, obj[properties[0]]);
      // This is the last property - the one where to set the value
    } else {
      // We set the value to the last property
      obj[properties[0]] = value;
      return true; // this is the end
    }
  }
}
