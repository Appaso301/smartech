import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { CareerComponent } from "./career/career.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, HeaderComponent, HomeComponent, NavbarComponent, AboutComponent, CareerComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "smartech";
}
