import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  power=10;

  heroes: any[] = [];
  //canFly = true;
  constructor() { }

  ngOnInit(): void {
  }

  addHero(name: string,canFly:boolean){

    name=name.trim();
    if(!name){
      return;
    }
    const hero={name:name,canFly:canFly};
    this.heroes.push(hero);
  }

  reset(){
    this.heroes.slice(0,this.heroes.length-1);
  }

}
