import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.css']
})
export class NestedComponent implements OnInit {
  model = '';
  @Input() heading = '';
  constructor() { }

  ngOnInit() {
  }
}
