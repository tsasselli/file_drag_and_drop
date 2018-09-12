import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[dropZone]'
})
export class DropZoneDirective {

  @Output() dropped = new EventEmitter<FileList>();
  @Output() hovered = new EventEmitter<boolean>();

  constructor() { }

  @HostListener('drop', ['$event'])
    onDrop($event) {
      $event.preventDefault(); // prevents browser from openening a new tab
      this.dropped.emit($event.dataTransfer.transfer.files);
      this.hovered.emit(false);
  }

  @HostListener('dragover', ['$event'])
    onDragOver($event) {
      event.preventDefault();
      this.hovered.emit(true);
    }

  @HostListener('dragleave', ['$event'])
   ondragleave($event) {
      $event.preventDefault();
      this.hovered.emit(false);
  }
}
