import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatPaginatorIntl, MatPaginatorModule, PageEvent } from '@angular/material/paginator';

function customPaginator(): MatPaginatorIntl {
  const paginatorIntl = new MatPaginatorIntl();
  paginatorIntl.itemsPerPageLabel = "Nombre d'éléments par page";
  paginatorIntl.nextPageLabel = "Page suivante";
  paginatorIntl.previousPageLabel = "Page précédente";
  paginatorIntl.firstPageLabel = "Première page";
  paginatorIntl.lastPageLabel = "Dernière page";

  paginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) {
      return `0 sur ${length}`;
    }
    const startIndex = page * pageSize;

    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} sur ${length}`;
  };
  return paginatorIntl;
}

@Component({
  selector: 'app-footer',
  imports: [MatPaginatorModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  providers: [
    { provide: MatPaginatorIntl, useFactory: customPaginator }
  ]
})
export class Footer {

  @Input() totalItems = 0;
  @Input() pageSize = 1;
  @Input() currentPage = 0;

  @Output() pageChange = new EventEmitter<PageEvent>();

  onPageChange(event: PageEvent) {
    this.pageChange.emit(event);
  }

}
