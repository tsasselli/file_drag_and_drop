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
    $event.preventDefault();
    this.dropped.emit($event.dataTransfer.files);
    this.hovered.emit(false);
  }

  @HostListener('dragleave', ['$event'])
    ondragleave($event) {
      $event.preventDefault();
      this.hovered.emit(false);
    }
}
