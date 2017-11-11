import { Injectable } from '@angular/core';
import {Vegetables} from '../shared/vegetables';
import {COMMENTS} from '../shared/comment';

@Injectable()
export class VegesService {

  constructor() { }

  getVeges(): Vegetables[]{
    return COMMENTS;
  }

  getVege(id: number): Vegetables {
    return COMMENTS.filter((vege) => (vege.id === id))[0];
  }

  getFeaturedVege(): Vegetables {
    return COMMENTS.filter((vege) => vege.featured)[0];
  }
}
