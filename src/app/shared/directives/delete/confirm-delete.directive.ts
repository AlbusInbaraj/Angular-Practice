import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appConfirmDelete]',
  standalone: true
})
export class ConfirmDeleteDirective {
  // Emit events only if user confirms the deletion action
  @Output() confirmDelete = new EventEmitter<void>();

  @HostListener('click', ['$event'])
  onConfirmClick(event: Event) {
    event.preventDefault();
    const confirmedAction = window.confirm('Are you sure you want to delete this item?');

    if (confirmedAction) {
      this.confirmDelete.emit();
    }
  }
}
