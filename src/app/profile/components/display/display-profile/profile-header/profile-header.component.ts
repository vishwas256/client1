import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css'],
})
export class ProfileHeaderComponent implements OnInit {
  @Input()
  name: any;
  @Input()
  status: any;
  @Input()
  location: any;
  @Input()
  company: any;

  constructor() {}

  ngOnInit(): void {}
}
