// Submitted by: Vyshnav R
// Email: vyshnavr856@gmail.com

import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {};
  navbarVisible = false;
  menuButtonVisible = false;

  userNotLogged: boolean = true;
  ngOnInit(): void {
    const logged = sessionStorage.getItem("logged")
    if (logged === "true")
      this.userNotLogged = false;

    else 
      this.userNotLogged = true;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth > 800) {
      this.navbarVisible = false;
      this.menuButtonVisible = false;
    }

    else {
      this.menuButtonVisible = true;
    }
  }

  toggleNavbar() {
    this.navbarVisible = !this.navbarVisible;
  }

  navigateHomepage() {
    this.router.navigate(["/"]);
  }

  navigateFavorites() {
    this.router.navigate(["/favorites"]);
  }

  navigateSearch() {
    this.router.navigate(["/search"]);
  }

  navigateCart() {
    this.router.navigate(["/cart"]);
  }

  navigateLogin() {
    console.log("clicked")
    this.router.navigate(["/login"]);
  }
}
