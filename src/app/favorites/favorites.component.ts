import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit {
  dishes = [
    {
      id: 101,
      name: "Chicken Biriyani",
      price: 200,
      desc: "Chicken dum biriyani",
      image: "../../assets/images/biriyani-dish.avif"
    },

    {
      id: 102,
      name: "Mutton Biriyani",
      price: 250,
      desc: "Mutton dum biriyani",
      image: "../../assets/images/biriyani-dish-2.avif"
    },

    {
      id: 103,
      name: "Egg Biriyani",
      price: 150,
      desc: "Egg biriyani",
      image: "../../assets/images/biriyani-dish-3.avif"
    },

    {
      id: 201,
      name: "Pizza",
      price: 200,
      desc: "Pizza with chicken and cheese",
      image: "../../assets/images/pizza-dish.avif"
    },

    {
      id: 202,
      name: "Chicken burger",
      price: 250,
      desc: "Fried chicken burger",
      image: "../../assets/images/burger-dish.avif"
    },

    {
      id: 203,
      name: "Shawarma",
      price: 100,
      desc: "Chicken shawarma",
      image: "../../assets/images/shawarma-dish.avif"
    },

    {
      id: 301,
      name: "Dosa",
      price: 50,
      desc: "Fresh dosa",
      image: "../../assets/images/dosa-dish.avif"
    },

    {
      id: 302,
      name: "Idli",
      price: 50,
      desc: "Fresh idli",
      image: "../../assets/images/idli-dish.avif"
    },

    {
      id: 303,
      name: "Parotta",
      price: 75,
      desc: "Fresh parotta",
      image: "../../assets/images/parotta-dish.avif"
    },

    {
      id: 401,
      name: "Naan",
      price: 75,
      desc: "Fresh butter naan",
      image: "../../assets/images/naan-dish.avif"
    },

    {
      id: 402,
      name: "Paneer butter masala",
      price: 250,
      desc: "One serving of paneer butter masala",
      image: "../../assets/images/paneer-dish-1.avif"
    },

    {
      id: 403,
      name: "Palak paneer",
      price: 100,
      desc: "Palak paneer",
      image: "../../assets/images/paneer-dish-2.avif"
    },

    {
      id: 501,
      name: "Ice cream",
      price: 200,
      desc: "Ice cream of choice flavor",
      image: "../../assets/images/ice-dish.avif"
    },

    {
      id: 502,
      name: "Brownie",
      price: 250,
      desc: "One chocolate brownie",
      image: "../../assets/images/brownie-dish.avif"
    },

    {
      id: 503,
      name: "Cake",
      price: 100,
      desc: "One choice of cake",
      image: "../../assets/images/cake-dish.avif"
    },
  ]

  arr: number[] = [];
  

  ngOnInit(): void {
    const stored = localStorage.getItem('favarr');
    if (stored) {
      this.arr = JSON.parse(stored);
    }
  }
}
