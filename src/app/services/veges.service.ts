import { Injectable } from '@angular/core';
import {Vegetables} from '../shared/vegetables';
import {COMMENTS} from '../shared/comment';

@Injectable()
export class VegesService {

  constructor() { }

  getVeges(): Promise<Vegetables[]>{
    return Promise.resolve(COMMENTS);
  }

  getVege(id: number): Promise<Vegetables> {
    return Promise.resolve(COMMENTS.filter((vege) => (vege.id === id))[0]);
  }

  getFeaturedVege(): Promise<Vegetables> {
    return Promise.resolve(COMMENTS.filter((vege) => vege.featured)[0]);
  }
}
