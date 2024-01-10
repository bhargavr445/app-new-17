import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseI } from '../StudentI';


function convertToUppercase(value: CourseI): CourseI {
  return ({
    ...value,
    courseName: value.courseName.toUpperCase()
  })
}

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  template: `<div>
  Name:  {{name}}
</div>
================================
<div>
  <!--  -->
 CourseName:  {{courseObj.courseName}}
</div>`,
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  @Input({
    required: true,
    transform: (value: string) => value.toUpperCase()
  }) name: string;

  @Input({
    required: true,
    transform: convertToUppercase
  }) courseObj: CourseI

}
