import { Component, OnInit } from '@angular/core';

import {Vegetables} from '../shared/vegetables';

import {VegesService} from '../services/veges.service';

@Component({
  selector: 'app-vege-r',
  templateUrl: './vege-r.component.html',
  styleUrls: ['./vege-r.component.scss']
})
export class VegeRComponent implements OnInit {

  veges: Vegetables[];

  selectedVegetable: Vegetables;

  constructor(private vegeser: VegesService) { }

  ngOnInit() {
     this.vegeser.getVeges()
    .then(veges => this.veges=veges);
  }

  onSelect(vege: Vegetables){
    this.selectedVegetable = vege;
  }

}
