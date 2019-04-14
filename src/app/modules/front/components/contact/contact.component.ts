import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../../../router.animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [routerTransition()]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
