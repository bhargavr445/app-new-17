import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppService } from './student.service';
import { ParentComponent } from './parent/parent.component';
import { Observable, of } from 'rxjs';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './communication/form/form.component';
// import { FormatInputDirective } from './format-input.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ParentComponent, FormsModule, ReactiveFormsModule, FormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  fectcResp: any;
  myForm: FormGroup;


  constructor(private appService: AppService) {

    this.getData();

    console.log(this.sumOdOddInt(3));

    const arrayObservable: Observable<number[]> = of([3, 3, 1]);
    this.appService.findSingleElementObservable(arrayObservable).subscribe((res) => console.log(res));

    


   // console.log(this.textSearch('c/harish', 'some text'))

    for (let props in this.appService) {
      console.log('*** Printing all Service call props ***');
      console.log(props);
      console.log('******');
    }
    console.log('Before Updating : ', this.appService['#apiUrl'])
    this.appService['#apiUrl']="api/updated";
    console.log('')
    console.log('After Updating : ',this.appService.getUtl());
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  createForm() {
    this.myForm = new FormGroup({
      name: new FormControl()
    })
  }

  getData() {
    this.appService.getApiData().subscribe(
      (response) => {
        console.log(response);
        
      },
      (error) => {
        console.log(error);
        
      }
    )

  }

  async jsFeat() {
    const data = await fetch('https://dummy.restapiexample.com/api/v1/employees');
    this.fectcResp = data.body;
  }


  sumOdOddInt(maxValue: number): number {
    let sum = 0;

    for(let i=1; i<=maxValue; i=i+2) {
      sum += i*i;
    }

    return sum;
  }


  // textSearch(filePath, keyWord) {
  //   let keyExists: boolean = false;

  //   try {

  //     const fileContent = fs.readFile(filePath);
  //     if(fileContent.includes(keyWord)) {
  //       keyExists = true
  //     }
  //     return keyExists;
  //   } catch() {
  //     // error handling
  //   }

    

  // }

}

// Employee table has employee (employee_id, fname,lname) 
// and demographic info (address, city, state). 
// Write sql to give list of all employees by state where there are atleast 10 employees in that state


// select count from Employee orderBy state