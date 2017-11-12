import { Component, OnInit, Input } from '@angular/core';

import {Params, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Vegetables} from '../shared/vegetables'
import {VegesService} from '../services/veges.service';

@Component({
  selector: 'app-cmt',
  templateUrl: './cmt.component.html',
  styleUrls: ['./cmt.component.scss']
})
export class CmtComponent implements OnInit {

  vege: Vegetables;

  constructor(private vegeser : VegesService, 
    private route : ActivatedRoute,
    private loc : Location) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
     this.vegeser.getVege(id)
     .then(vege => this.vege=vege);
  }

  goBack(): void {
    this.loc.back();
  }

}
