import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFormatInput]',
})
export class FormatInputDirective {

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    let inputValue: string = this.el.nativeElement.value;

    // Remove any existing commas and ".00"
    inputValue = inputValue.replace(/,|\.\d{2}/g, '');

    // Add a comma and ".00" to the input value
    inputValue = this._formatInput(inputValue);

    // Update the input value
    this.el.nativeElement.value = inputValue;
  }

  @HostListener('input', ['$event']) onInput(event: any) {
    // Restrict the input to a maximum of 4 characters
    let value: string = event.target.value;

    // Remove non-numeric characters
    value = value.replace(/[^0-9.]/g, '');

    // Ensure the input is a valid number
    if (isNaN(parseFloat(value))) {
      // If not a valid number, clear the input value
      this.el.nativeElement.value = '';
    } else {
      // If valid, update the input value
      this.el.nativeElement.value = value.slice(0, 4);
    }
  }

  private _formatInput(value: string): string {
    // Format the input by adding a comma and ".00"
    const numberValue: number = parseFloat(value);
    if (!isNaN(numberValue)) {
      value = numberValue.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    return value;
  }
}
