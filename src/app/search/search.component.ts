import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  dishes = [
    {
      id: 101,
      name: "Chicken Biriyani",
      price: 200,
      desc: "Chicken dum biriyani",
      image: "../../assets/images/biriyani-dish.avif",
      count: 0
    },

    {
      id: 102,
      name: "Mutton Biriyani",
      price: 250,
      desc: "Mutton dum biriyani",
      image: "../../assets/images/biriyani-dish-2.avif",
      count: 0
    },

    {
      id: 103,
      name: "Egg Biriyani",
      price: 150,
      desc: "Egg biriyani",
      image: "../../assets/images/biriyani-dish-3.avif",
      count: 0
    },

    {
      id: 201,
      name: "Pizza",
      price: 200,
      desc: "Pizza with chicken and cheese",
      image: "../../assets/images/pizza-dish.avif",
      count: 0
    },

    {
      id: 202,
      name: "Chicken burger",
      price: 250,
      desc: "Fried chicken burger",
      image: "../../assets/images/burger-dish.avif",
      count: 0
    },

    {
      id: 203,
      name: "Shawarma",
      price: 100,
      desc: "Chicken shawarma",
      image: "../../assets/images/shawarma-dish.avif",
      count: 0
    },

    {
      id: 301,
      name: "Dosa",
      price: 50,
      desc: "Fresh dosa",
      image: "../../assets/images/dosa-dish.avif",
      count: 0
    },

    {
      id: 302,
      name: "Idli",
      price: 50,
      desc: "Fresh idli",
      image: "../../assets/images/idli-dish.avif",
      count: 0
    },

    {
      id: 303,
      name: "Parotta",
      price: 75,
      desc: "Fresh parotta",
      image: "../../assets/images/parotta-dish.avif",
      count: 0
    },

    {
      id: 401,
      name: "Naan",
      price: 75,
      desc: "Fresh butter naan",
      image: "../../assets/images/naan-dish.avif",
      count: 0
    },

    {
      id: 402,
      name: "Paneer butter masala",
      price: 250,
      desc: "One serving of paneer butter masala",
      image: "../../assets/images/paneer-dish-1.avif",
      count: 0
    },

    {
      id: 403,
      name: "Palak paneer",
      price: 100,
      desc: "Palak paneer",
      image: "../../assets/images/paneer-dish-2.avif",
      count: 0
    },

    {
      id: 501,
      name: "Ice cream",
      price: 200,
      desc: "Ice cream of choice flavor",
      image: "../../assets/images/ice-dish.avif",
      count: 0
    },

    {
      id: 502,
      name: "Brownie",
      price: 250,
      desc: "One chocolate brownie",
      image: "../../assets/images/brownie-dish.avif",
      count: 0
    },

    {
      id: 503,
      name: "Cake",
      price: 100,
      desc: "One choice of cake",
      image: "../../assets/images/cake-dish.avif",
      count: 0
    },
  ]

  searchControl = new FormControl('');
  filteredDish = this.dishes;
  constructor() {
    this.searchControl.valueChanges.pipe(
      debounceTime(300), 
      distinctUntilChanged(),
      map(query => this.filterDishes(query ?? ""))
    ).subscribe(filteredDish => {
      this.filteredDish = filteredDish;
    });
  }

  filterDishes(query: string) {
    return this.dishes.filter(dish =>
      dish.name.toLowerCase().includes(query.toLowerCase())
    );
  }
  
  localArray: any[] = []
  addtoFavorites(dishId: number) {
    const stored = localStorage.getItem("favarr");
    this.localArray = stored ? JSON.parse(stored) : [];
    for (let i = 0; i < this.localArray.length; i++) {
      if (this.localArray[i] == dishId)
          return;
    }
    this.localArray.push(dishId);
    localStorage.setItem("favarr", JSON.stringify(this.localArray));
    alert("Item added to favorites")
    console.log(localStorage.getItem("favarr"))
  }

  addtoCart(dishId: number) {
    const stored = localStorage.getItem("cart");
    this.localArray = stored ? JSON.parse(stored) : [];
    this.localArray.push(dishId);
    localStorage.setItem("cart", JSON.stringify(this.localArray));
    alert("Item added to cart")
    console.log(localStorage.getItem("cart"))
  }
}
