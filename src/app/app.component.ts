import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, HeaderComponent, HomeComponent, NavbarComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "smartech";
}
