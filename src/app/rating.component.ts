import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';
@Component({
    selector:'nested-rating',
    templateUrl: 'rating.component.html'
})
export class RatingComponent implements OnChanges{
  @Input() rating:number = 3.5;
  proficiencyLevel: string = 'Default';
  @Output() proficiencyClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges() : void
  {
     if(this.rating > 5.0 && this.rating < 7.0){
         this.proficiencyLevel = 'Good';
     } else if (this.rating > 7.0 && this.rating < 9.0){
         this.proficiencyLevel = 'Very Good'
     } else if(this.rating > 9.0){
         this.proficiencyLevel = 'Excellent'
     } else {
         this.proficiencyLevel = 'Bad'
     }
  }

  onClick(): void
  {
      this.proficiencyClicked.emit(`The proficiency is: ${this.proficiencyLevel}`);
  }

}