import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flyingHeroesPipe',
  pure:false
})
export class FlyingHeroesPipePipe implements PipeTransform {

  transform(allHeroes:any[]){

    allHeroes.filter(hero=>{hero.canFly===true});
  }

}
