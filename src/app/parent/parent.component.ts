import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  template: `

  <app-child 
  [name]="'Angular'" 
  [courseObj]="{courseName: 'React', courseId: 'cr18'}" />`,

  styleUrl: './parent.component.scss'
})
export class ParentComponent {

}
