import { Component, OnInit } from '@angular/core';
import {slideToLeft} from '../../../router.animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [slideToLeft()]
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
