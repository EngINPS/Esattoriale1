//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MenuService } from './services/menu.service';
//import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MenuService]
})
export class AppComponent {
  title = 'app-menu';
}


