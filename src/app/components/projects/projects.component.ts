import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  @Input() title: string;
  test = 'This is My Test'

  constructor() { }

  ngOnInit() {
  }

  testFn(){
    alert('Bosildi')
  }

}
