import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-experience',
  templateUrl: './profile-experience.component.html',
  styleUrls: ['./profile-experience.component.css'],
})
export class ProfileExperienceComponent implements OnInit {
  @Input()
  e: any;
  constructor() {}

  ngOnInit(): void {}
}
