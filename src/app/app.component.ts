import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Saint Seiya Awakening - Damage Playground';
  selectedTemp;
  attackerLvl = 80;
  skill = 1;

  cosmoStats = {
    fellina: 0.5,
    chaineHephaistos: 0.4,
    geantRoi: 0.6,
    serpentDeuxCornes: 0.4,
  };

  base = 'base';
  boost = 'boost';
  boostingame = 'boostingame';
  final = 'final';

  selectedCosmo = 0;
  degatsFinauxCosmic = 0;
  degatsFinauxPhysiqueSansCrit = 0;
  degatsFinauxPhysiqueAvecCrit = 0;

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
    atq_p: {
      total: () =>
        this.basicAttr.atq_p.base +
        this.basicAttr.atq_p.boost +
        this.basicAttr.atq_p.boost2,
      base: 3000,
      boost: 8000,
      boost2: 4000,
    },
  };

  basicAttrOpponent = {
    def_c: {
      total: () =>
        this.basicAttrOpponent.def_c.base +
        this.basicAttrOpponent.def_c.boost +
        this.basicAttrOpponent.def_c.boost2,
      base: 3000,
      boost: 8000,
      boost2: 4000,
    },
    def_p: {
      total: () =>
        this.basicAttrOpponent.def_p.base +
        this.basicAttrOpponent.def_p.boost +
        this.basicAttrOpponent.def_p.boost2,
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
    effet_crit: {
      total: () =>
        this.combatAttr.effet_crit.base + this.combatAttr.effet_crit.boost,
      base: 40,
      boost: 3,
    },
    penetration_c: 36,
    penetration_p: 36,
  };

  combatAttrOpponent = {
    p_crit_res: 40,
    res_deg_p: 10,
    rest_deg_c: 10,
  };

  constructor(private renderer: Renderer2) {}

  selectCosmo(e, cosmo) {
    console.log('selected : ', e);
    const selected = e.target.classList.contains('img-selected');
    if (selected) {
      this.renderer.removeClass(e.target, 'img-selected');
      this.selectedCosmo = 0;
    } else {
      this.renderer.addClass(e.target, 'img-selected');
      if (this.selectedTemp) {
        this.renderer.removeClass(this.selectedTemp, 'img-selected');
      }
      this.selectedCosmo = this.cosmoStats[cosmo];
      this.selectedTemp = e.target;
    }

    this.calculDegatsCosmiqueFinaux();
    this.calculDegatsPhysiqueSansCrit();
    this.calculDegatsPhysiqueAvecCrit();
  }

  saveValue(value, obj, path) {
    switch (obj) {
      case 'basicAttr':
        this.setValue(path, value, this.basicAttr);
        break;
      case 'basicAttrOpponent':
        this.setValue(path, value, this.basicAttrOpponent);
        break;
      case 'combatAttr':
        this.setValue(path, value, this.combatAttr);
        break;
      case 'combatAttrOpponent':
        this.setValue(path, value, this.combatAttrOpponent);
        break;
    }

    this.calculDegatsCosmiqueFinaux();
    this.calculDegatsPhysiqueSansCrit();
    this.calculDegatsPhysiqueAvecCrit();
  }

  setValue = (propertyPath, value, obj) => {
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
  };

  setSkillValue(value) {
    this.skill = value;
  }

  calculDegatsCosmiqueFinaux() {
    const totalCatk = this.basicAttr.atq_c.total();
    const skill = this.skill / 100;
    const totalCdmg = 1 + this.combatAttr.deg_c.total() / 100;
    const def_factorC =
      (400 + this.attackerLvl * 10) /
      (this.basicAttrOpponent.def_c.total() -
        this.combatAttr.penetration_c +
        400 +
        this.attackerLvl * 10);
    const finalFactor = 1 + this.selectedCosmo;
    const cResFactor = 1 / (1 + this.combatAttrOpponent.rest_deg_c / 100);

    this.degatsFinauxCosmic = Math.round(
      totalCatk * skill * totalCdmg * def_factorC * finalFactor * cResFactor
    );
    console.log(this.degatsFinauxCosmic);
  }

  calculDegatsPhysiqueSansCrit() {
    const totalCatk = this.basicAttr.atq_p.total();
    const skill = this.skill / 100;
    const totalCdmg = 1 + this.combatAttr.deg_c.total() / 100;
    const def_factorP =
      (400 + this.attackerLvl * 10) /
      (this.basicAttrOpponent.def_p.total() -
        this.combatAttr.penetration_p +
        400 +
        this.attackerLvl * 10);
    const finalFactor = 1 + this.selectedCosmo;
    const pResFactor = 1 / (1 + this.combatAttrOpponent.res_deg_p / 100);

    this.degatsFinauxPhysiqueSansCrit = Math.round(
      totalCatk * skill * totalCdmg * def_factorP * finalFactor * pResFactor
    );
    console.log(this.degatsFinauxPhysiqueSansCrit);
  }

  calculDegatsPhysiqueAvecCrit() {
    const totalCatk = this.basicAttr.atq_p.total();
    const skill = this.skill / 100;
    const effetCrit = 1 + this.combatAttr.effet_crit.total() / 100;
    const def_factorP =
      (400 + this.attackerLvl * 10) /
      (this.basicAttrOpponent.def_p.total() -
        this.combatAttr.penetration_p +
        400 +
        this.attackerLvl * 10);
    const finalFactor = 1 + this.selectedCosmo;
    const pResFactor = 1 / (1 + this.combatAttrOpponent.res_deg_p / 100);

    this.degatsFinauxPhysiqueAvecCrit = Math.round(
      totalCatk * skill * effetCrit * def_factorP * finalFactor * pResFactor
    );
    console.log(this.degatsFinauxPhysiqueAvecCrit);
  }
}
