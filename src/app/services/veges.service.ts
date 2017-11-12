import { Injectable } from '@angular/core';
import {Vegetables} from '../shared/vegetables';
import {COMMENTS} from '../shared/comment';

@Injectable()
export class VegesService {

  constructor() { }

  getVeges(): Promise<Vegetables[]>{
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(COMMENTS), 2000);
    });
  }

  getVege(id: number): Promise<Vegetables> {
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(COMMENTS.filter((vege) => (vege.id === id))[0]), 2000);
    });
  }

  getFeaturedVege(): Promise<Vegetables> {
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(COMMENTS.filter((vege) => vege.featured)[0]), 2000);
    });
  }
}
