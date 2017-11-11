import { Component, OnInit } from '@angular/core';

import { Vegetables } from '../shared/vegetables';
import { VegesService } from '../services/veges.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  vege: Vegetables;
  promotion: Promotion;
  leader: Leader;

  constructor(private vegeservice: VegesService,
    private promotionservice: PromotionService,
    private leadServ: LeaderService) { }

  ngOnInit() {
    this.vege = this.vegeservice.getFeaturedVege();
    this.promotion = this.promotionservice.getFeaturedPromotion();
    this.leader = this.leadServ.getFeaturedLeader();
  }
}