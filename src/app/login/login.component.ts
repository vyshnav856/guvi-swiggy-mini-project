import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  username2: string = "";
  password2: string = "";

  onSubmit(): void {
    alert("Request sent, please wait for account creation");
    fetch("https://6717f822b910c6a6e02abb38.mockapi.io/api/users", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({username: this.username, password: this.password})
    }).then(response => console.log(response)).catch(error => console.log(error))
  }

  onSubmitLogin(): void {
    alert("Login request sent. Please wait.")
    fetch("https://6717f822b910c6a6e02abb38.mockapi.io/api/users").then(response => {
      return response.json();
    }).then(data => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].username == this.username2 && data[i].password == this.password2) {
          alert("Login successful!");
          sessionStorage.setItem("logged", "true");
          window.location.reload();
          return;
        }
      }

      alert("Login not succcessful!")
      return;
    })
  }
}
