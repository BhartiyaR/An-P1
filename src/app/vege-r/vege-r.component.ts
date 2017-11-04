import { Component, OnInit } from '@angular/core';

import {Vegetables} from '../shared/vegetables';

const VEGES: Vegetables[] = [
  {
    name: 'potato',
    image: '/assets/images/potato.jpg',
    rate: '₹10',
    weight: '1kg'
  },
  {
    name: 'onion',
    image: '/assets/images/onion.jpg',
    rate: '₹50',
    weight: '1kg'
  },
  {
    name: 'ocra/ladyfinger',
    image: '/assets/images/ocra.jpg',
    rate: '₹40',
    weight: '1kg'
  },
  {
    name: 'tomato',
    image: '/assets/images/tomato.jpg',
    rate: '₹38',
    weight: '1kg'
  }
  
]

@Component({
  selector: 'app-vege-r',
  templateUrl: './vege-r.component.html',
  styleUrls: ['./vege-r.component.scss']
})
export class VegeRComponent implements OnInit {

  veges = VEGES;

  selectedVegetable: Vegetables = VEGES[0];

  constructor() { }

  ngOnInit() {
  }

}
