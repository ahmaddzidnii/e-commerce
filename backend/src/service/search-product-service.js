import { db } from "../../lib/db.js";
import { ResponseError } from "../error/response-error.js";

const searchHintService = async (req) => {
  const { query } = req.query;

  if (!query) {
    throw new ResponseError("search hint not found", 404);
  }

  const search_hint = await db.product.findMany({
    where: {
      OR: [
        {
          product_name: {
            search: query,
          },
        },
        {
          product_name: {
            contains: query,
          },
        },
      ],
    },
    take: 10,
    select: {
      id: true,
      product_name: true,
      product_image: true,
      category: true,
      price: true,
    },
  });

  return search_hint;
};

const searchProductService = async (req) => {
  let { query, limit, page } = req.query;

  if (!query) {
    throw new ResponseError("search not found", 404);
  }
  if (!limit || limit < 48 || isNaN(limit)) {
    limit = 48;
  }

  if (!page || page < 1 || isNaN(page)) {
    page = 1;
  }

  const itemsPerPage = parseInt(limit);
  const currentPage = parseInt(page);

  const countProduct = await db.product.count({
    where: {
      OR: [
        {
          product_name: {
            search: query,
          },
        },
        {
          product_name: {
            contains: query,
          },
        },
      ],
    },
  });

  const totalPages = Math.ceil(countProduct / itemsPerPage);
  const offset = (currentPage - 1) * itemsPerPage;

  // Menghitung jumlah item yang harus ditampilkan dalam halaman terakhir
  const itemsInLastPage = countProduct % itemsPerPage;
  const count = currentPage === totalPages ? itemsInLastPage : itemsPerPage;

  const products = await db.product.findMany({
    where: {
      OR: [
        {
          product_name: {
            search: query,
          },
        },
        {
          product_name: {
            contains: query,
          },
        },
      ],
    },
    take: itemsPerPage,
    skip: offset,
  });

  // Kondisi dimana tidak memiliki halaman selanjutnya
  const hasNextPage = totalPages === currentPage ? false : true;

  // Kondisi dimana tidak memiliki halaman sebelumnya
  const hasPrevPage = currentPage === 1 ? false : true;

  const data = {
    products,
    pagination: {
      current_page: currentPage,
      total_page: totalPages,
      count: count,
      has_next_page: hasNextPage,
      has_prev_page: hasPrevPage,
    },
  };
  return data;
};
export default {
  searchHintService,
  searchProductService,
};
