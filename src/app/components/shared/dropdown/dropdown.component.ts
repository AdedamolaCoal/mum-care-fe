import { NgClass, NgFor } from '@angular/common';
import { Component, HostListener, Input, input } from '@angular/core';
import { ClassNameValue, twMerge } from 'tailwind-merge';
const defaultOptions = ['Last 7 Days', 'Last 1 Month', 'Last 1 Year']
@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [NgClass,NgFor],
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent {

  currentOptions:string[]=[]
  selected=''
  btnClass=''
  dropdownClass=''
  // props
  @Input() options?:string[]
  @Input() btnClassProps?:string
  @Input() dropdownClassProps?:string

  selectOption(option:string){
    this.selected=option
    this.isOpen=false
  }
  isOpen = false
  toggleOpen(event:MouseEvent) {
    const allDropdowns = document.querySelectorAll('.dropdown'); // Find all dropdowns
    allDropdowns.forEach(dropdown => {
        if (dropdown !== event.target) {
            dropdown.classList.remove('show');
            dropdown.classList.add('hide');
        }
    });
    this.isOpen = !this.isOpen
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
  const targetElement = event.target as Element;

    // Check if event.target exists and if the click event target is not within the dropdown or the dropdown button
    if (targetElement && !targetElement.closest('.dropdown-btn')) {
      this.isOpen = false; // Close the dropdown
    }
  }


  ngOnInit(){
    this.currentOptions = this.options?.length?this.options:defaultOptions
    this.selected=this.currentOptions[0]
    this.btnClass=twMerge('border dropdown-btn select-none cursor-pointer bg-primary/5 dark:bg-bg3 border-n30 text-sm md:text-base dark:border-n500 flex gap-2 justify-between items-center rounded-xl px-3 py-1.5 sm:px-4 sm:py-2',this.btnClassProps)
    this.dropdownClass = twMerge('absolute dropdown flex-col z-20 top-full duration-300 origin-top min-w-max shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] max-h-40 overflow-y-auto right-0 bg-n0 dark:bg-bg4 p-1 rounded-md',this.dropdownClassProps)
  }
}
