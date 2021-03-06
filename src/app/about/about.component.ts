import { Component, OnInit } from '@angular/core';

import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  leader : Leader[];

  constructor(  private leadSer : LeaderService ) {}

  ngOnInit() {
     this.leadSer.getLeaders()
    .then(leader => this.leader=leader);
  }

}
