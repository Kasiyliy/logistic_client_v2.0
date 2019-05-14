import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../../../router.animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [routerTransition()],
})
export class MainComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
