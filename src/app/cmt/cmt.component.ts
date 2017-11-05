import { Component, OnInit, Input } from '@angular/core';

import {Vegetables} from '../shared/vegetables'

@Component({
  selector: 'app-cmt',
  templateUrl: './cmt.component.html',
  styleUrls: ['./cmt.component.scss']
})
export class CmtComponent implements OnInit {

  @Input()

  vege: Vegetables;

  constructor() { }

  ngOnInit() {
  }

}
