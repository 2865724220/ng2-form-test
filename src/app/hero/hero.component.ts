import { Component } from '@angular/core';
import { Hero } from './hero';
import logger from '../decorator/MethodDecorator';
import { LoggerService } from '../logger.component';

@Component({
  selector: 'hero-form',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  submitted = false;

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  color: string;

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  reset() {
    this.model.clear();
  }

}
