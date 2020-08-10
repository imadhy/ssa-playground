import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-defense-cosmic',
  templateUrl: './defense-cosmic.component.html',
  styleUrls: ['./defense-cosmic.component.scss'],
})
export class DefenseCosmicComponent implements OnInit {
  @Input() reductionDegats = 0;
  @Output() updateDefenseCosmic: EventEmitter<any> = new EventEmitter<any>();

  basicAttrOpponent = {
    def_c: {
      total: () =>
        this.basicAttrOpponent.def_c.base +
        this.basicAttrOpponent.def_c.boost +
        this.basicAttrOpponent.def_c.boost2,
      base: 300,
      boost: 100,
      boost2: 0,
    },
  };

  combatAttrOpponent = {
    rest_deg_c: 10,
  };

  base = 'base';
  boost = 'boost';
  boostingame = 'boostingame';
  final = 'final';

  constructor() {}

  ngOnInit(): void {}

  saveValue(value, obj, path) {
    switch (obj) {
      case 'basicAttrOpponent':
        this.setValue(path, value, this.basicAttrOpponent);
        this.updateDefenseCosmic.emit([
          'basicAttrOpponent',
          this.basicAttrOpponent,
        ]);
        break;
      case 'combatAttrOpponent':
        this.setValue(path, value, this.combatAttrOpponent);
        this.updateDefenseCosmic.emit([
          'combatAttrOpponent',
          this.combatAttrOpponent,
        ]);
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
