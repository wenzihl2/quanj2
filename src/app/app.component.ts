import { Component } from '@angular/core';


import { Hero } from './hero';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];


@Component({

  selector: 'app-root',
  template: `
 <div *ngIf="selectedHero">
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{selectedHero.id}}</div>
  <div><label>name: </label>{{selectedHero.name}}</div>
  <div>
  <label>name: </label>
  <input [(ngModel)]="selectedHero.name" placeholder="name">
  </div>

</div>
  <li *ngFor="let hero of heroes" (click)="onSelect(hero)">
  <span class="badge">{{hero.id}}</span> {{hero.name}}
</li>

  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  selectedHero:Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  title = 'Tour of Heroes';
  heroes=HEROES;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}



