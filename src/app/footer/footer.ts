import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-footer',
  imports: [MatPaginatorModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer{

  @Input() totalItems = 0;
  @Input() pageSize = 1;
  @Input() currentPage = 0;

  @Output() pageChange = new EventEmitter<PageEvent>();

  onPageChange(event: PageEvent) {
    this.pageChange.emit(event);
  }
}
