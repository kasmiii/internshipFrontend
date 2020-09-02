import { Component, OnInit, SimpleChanges, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-on-change',
  templateUrl: './on-change.component.html',
  styleUrls: ['./on-change.component.scss']
})
export class OnChangeComponent implements OnInit,OnChanges {

  @Input("name") name:string;
  value="mohammed";
  changeLog=[];
  constructor() { }

  ngOnInit(): void {
    for(let i=0;i<10;i++){
      this.name+=this.value+":"+i;

    }
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      //console.log("current value of name is : "+cur+" previous value is : "+prev);   
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

}
