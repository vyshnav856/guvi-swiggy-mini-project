import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClientModule, HttpClient  } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  constructor(private http: HttpClient) {}
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

  arr: number[] = [];
  dishes2: any[] = [];
  totalPrice: number = 0;

  ngOnInit(): void {
    const stored = localStorage.getItem('cart');
    if (stored) {
      this.arr = JSON.parse(stored);
    }

    const selected = []
    for (let i = 0; i < this.dishes.length; i++) {
      if (this.arr.includes(this.dishes[i].id)) {
        const newdish = this.dishes[i];
        newdish.count = 0;
        selected.push(newdish)
      }
    }
    
    for (let i = 0; i < this.arr.length; i++) {
      for (let j = 0; j < selected.length; j++) {
        if (this.arr[i] == selected[j].id) {
          selected[j].count++;
          this.totalPrice += selected[j].price;
        }
      }
    }

    this.dishes2 = selected;

  }

  submitOrderData() {
    alert("Order submitted");
    console.log(this.dishes2)
    fetch("https://6717f822b910c6a6e02abb38.mockapi.io/api/order", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(this.dishes2)
    }).then(response => console.log(response)).catch(error => console.log(error))
  }
}