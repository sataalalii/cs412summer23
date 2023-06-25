import {Component, OnInit, OnChanges, SimpleChange, Input} from '@angular/core';

@Component({
  selector: 'app-child-c',
  template: '<h3>Child C</h3>' +
    '<br/>Count in the child is: {{counter}}' +
    '<br/>Previous count: {{_previous}}',
  styleUrls: ['./child-c.component.css']
})
export class ChildCComponent implements OnChanges {

  @Input() counter!: number;
  _previous: number = 0;

  constructor() { }

  ngOnChanges(changes: {[key: string]: SimpleChange}) {
    console.table(changes);
//    this._previous = changes['counter'].previousValue;
    this._previous = changes['counter'].previousValue;
  }

 ngOnInit() {

 }

}


// variable:  created, updated, deleted
// hooks at each intersection, one at created, one at updated, one at deleted


