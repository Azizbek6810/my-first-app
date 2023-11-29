import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  title = "This data sent from child Component";
  @Output() myTitleChange = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  testFn() {
    console.log('ishladi');
    
    this.myTitleChange.emit(this.title);
  }
}
