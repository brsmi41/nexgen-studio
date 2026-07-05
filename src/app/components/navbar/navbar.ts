import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  public isMobileMenuOpen: boolean = false;

  public toggleMobileMenu():void{
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
