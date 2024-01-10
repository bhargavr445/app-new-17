import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../table/table.component';
import { FormService } from 'src/app/form.service';
import { UniversityI } from '../univI';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  universityList: UniversityI[];

  constructor(private formService: FormService) {

  }


  onSearchClick(): void {
    console.log('executed...');

    this.formService.getUnivList().subscribe(
      (response: UniversityI[]) => {
        this.universityList = response;
      },
      () => {}
    );
  }

}
