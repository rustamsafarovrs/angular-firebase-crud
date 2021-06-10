import {Component, OnInit} from '@angular/core';
import Tutorial from '../models/tutorial.model';
import {TutorialService} from '../_services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {

  tutorial = new Tutorial();
  submitted = false;

  constructor(private tutorialService: TutorialService) {
  }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    this.tutorialService.create(this.tutorial).then(() => {
      console.log('Created new item successfully');
      this.submitted = true;
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = new Tutorial();
  }
}
