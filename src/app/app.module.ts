import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GoalComponentComponent } from "./goal-component/goal-component.component";
import { GoalDetailsComponent } from "./goal-details/goal-details.component";
import { StrikethroughDirective } from "./strikethrough.directive";
import { DateCountPipe } from "./date-count.pipe";
import { GoalFormComponent } from "./goal-form/goal-form.component";

@NgModule({
  declarations: [
    AppComponent,
    GoalComponentComponent,
    GoalDetailsComponent,
    StrikethroughDirective,
    DateCountPipe,
    GoalFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
