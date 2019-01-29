import { Component, OnInit } from "@angular/core";
import { GoalClass } from "../goal-class";

@Component({
  selector: "app-goal-form",
  templateUrl: "./goal-form.component.html",
  styleUrls: ["./goal-form.component.css"]
})
export class GoalFormComponent implements OnInit {
  newGoal = new GoalClass(0, "", "", new Date());

  constructor() {}

  ngOnInit() {}
}
