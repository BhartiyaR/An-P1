import { Component, OnInit } from '@angular/core';

import {Vegetables} from '../shared/vegetables';

import {COMMENTS} from '../shared/comment';

@Component({
  selector: 'app-vege-r',
  templateUrl: './vege-r.component.html',
  styleUrls: ['./vege-r.component.scss']
})
export class VegeRComponent implements OnInit {

  veges = COMMENTS;

  selectedVegetable: Vegetables;

  constructor() { }

  ngOnInit() {
  }

  onSelect(vege: Vegetables){
    this.selectedVegetable = vege;
  }

}
