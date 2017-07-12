import { Component, OnInit, Input } from '@angular/core';
import { log } from './decorator/MethodDecorator';
import logger from './decorator/MethodDecorator';
import { sealed, freeze} from './decorator/ClassDecorator';
import { configurable } from './decorator/PropertiesDecorator';
import { format } from './decorator/PropertiesDecorator';
import { required, validate } from './decorator/ParamDecorator';
import { App } from './test.component.interface';
import { Hero } from './hero/hero';
import { LoggerService } from './logger.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggerService]
})
@sealed
@freeze
export class AppComponent implements OnInit {

  @format('Hello, %s')
  greeting = 'Google';
  app: App = {
    title: 'AngularJS2',
    greeting: this.greeting
  };

  clickMessage = '';

  keyUpValues = '';

  values = '';

  enterValue = '';

  blurValue = '';

  heroesArr = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  constructor(private loggerService: LoggerService) {
  }

  @logger
  get heroes() {
    return [
      new Hero(1, 'Windstorm', ''),
      new Hero(13, 'Bombasto', ''),
      new Hero(15, 'Magneta', ''),
      new Hero(20, 'Tornado', '')
    ];
  }

  // title: string;

  /*@Input()
  set _title(title: string) {
    this.title = this.app.title;
  }*/

  @configurable(false)
  get title(){
    return this.app.title;
  }

  @logger
  get myHero() {
    return this.heroes[0];
  }

  @log()
  ngOnInit() {
    return 'Init Message: ' + this.greet(this.app);
  }

  @log()
  testMethod(arg: string) {
    return 'logMsg: ' + arg;
  }

  @validate
  @log()
  greet(@required app: App) {
    return 'Hello ' + app.greeting + ', ' + app.title;
  }


  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }

  onKey(event: KeyboardEvent) { // with type info
    this.keyUpValues += (<HTMLInputElement>event.target).value + ' | ';
  }

  onKey2(value: string) {
    this.values += value;
  }

  onEnter(value: string) {
    this.enterValue = value;
  }

  update(value: string) {
    this.blurValue = value;
  }

  addHero(newHero: string) {
    const reg = /^[a-zA-z]$/;
    if (!newHero || !reg.test(newHero)) {
      this.loggerService.info('只能输入英文字母!');
      return;
    }

    let isExists = false;
    for ( const hero of this.heroesArr) {
      if (hero === newHero) {
        isExists = true;
        break;
      }
    }

    if (!isExists) {
      this.heroesArr.push(newHero);
    }
  }
}
