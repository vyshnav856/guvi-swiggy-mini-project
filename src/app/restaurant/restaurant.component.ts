import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent implements OnInit {
  restId: number = 100;
  restDetails: any;
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.restId = +this.route.snapshot.paramMap.get('id')!;
    this.loadRestDetails(this.restId);
  }

  loadRestDetails(id: number): void {
    const restaurants = [
      {
        id: 100,
        name: "Biriyani House",
        rating: 4.4,
        distance: "25-30 mins",
        overview: "Biriyani, Chicken, Rice",
        location: "Katpadi",
        image: "../../assets/images/biriyani-restaurant.avif",
        dishes: [
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
        ]
      },
  
      {
        id: 200,
        name: "Quick Bites",
        rating: 4.8,
        distance: "25-30 mins",
        overview: "Pizza, Burgers",
        location: "Vellore",
        image: "../../assets/images/pizza-restaurant.avif",
        dishes: [
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
        ]
      },
  
      {
        id: 300,
        name: "Southern Food Court",
        rating: 4.2,
        distance: "10-20 mins",
        overview: "Dosa, Idli, Parotta",
        location: "Vellore",
        image: "../../assets/images/south-restaurant.avif",
        dishes: [
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
        ]
      },
  
      {
        id: 400,
        name: "North Foods",
        rating: 4.7,
        distance: "25-25 mins",
        overview: "Naan, Paneer, Dal",
        location: "Green Circle",
        image: "../../assets/images/north-restaurant.avif",
        dishes: [
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
        ]
      },
  
      {
        id: 500,
        name: "Dessert Palace",
        rating: 4.1,
        distance: "30-40 mins",
        overview: "Ice Cream, Brownie",
        location: "Katpadi",
        image: "../../assets/images/dessert-restaurant.avif",
        dishes: [
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
      },
    ]

    this.restDetails = restaurants.find(rest => rest.id === id);
  }
}
