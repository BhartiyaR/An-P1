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
    this.vegeservice.getFeaturedVege().then(vege => this.vege=vege);
    this.promotionservice.getFeaturedPromotion().then(promotion => this.promotion=promotion);
    this.leadServ.getFeaturedLeader().then(leader => this.leader = leader);
  }
}