import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css'],
  providers: [MenuService]
})

export class SidebarMenuComponent {

  constructor(private menuService : MenuService) {
    this.menuService.menuMock().subscribe( (result) => { this.menuItems = result } );
   }  
   menuItems: any
}