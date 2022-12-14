import { Injectable } from '@nestjs/common';

@Injectable()
export class PaginationService {
  getPagination(page, size) {
    const limit = size ? +size : 15;
    const offset = page ? page * limit : 0;

    return { limit, offset };
  }

  getPagingData(data, page, limit) {
    const { count: totalItems, rows } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, rows, totalPages, currentPage };
  }
}
