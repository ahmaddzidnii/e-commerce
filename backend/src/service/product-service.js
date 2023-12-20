import { db } from "../../lib/db.js";
import { ResponseError } from "../error/response-error.js";
import { productValidationSchema } from "../validation/product-validation.js";
import { validate } from "../validation/validation.js";

const createProductService = async (req) => {
  const product = validate(productValidationSchema, req);

  const createProduct = await db.product.create({
    data: {
      name: product.name,
      price: product.price,
      description: product.description,
    },
  });
};

const productRecomendationService = async (req) => {
  let { limit } = req.query;

  if (!limit) {
    limit = 48;
  }

  if (isNaN(limit)) {
    throw new ResponseError("Limit must be a number", 400);
  }
  if (limit < 48) {
    throw new ResponseError("Limit must be greater than 48", 400);
  }

  const product = await db.product.findMany();

  if (limit > product.length) {
    throw new ResponseError("Limit must be less than the number of products", 400);
  }

  const productShuffle = product.sort(() => 0.5 - Math.random());
  const numberProductsToReturn = parseInt(limit) || 48;

  const randomProduct = productShuffle.slice(0, numberProductsToReturn);

  return randomProduct;
};

const productsService = async (req) => {
  const { page, limit } = req.query;
  const itemsPerPage = parseInt(limit) || 48; // Jumlah data per halaman
  const currentPage = parseInt(page) || 1; // Halaman saat ini

  //   Handle dimana client mengirim limit dibawah 48
  if (itemsPerPage < 48) {
    throw new ResponseError("Limit tidak boleh kurang dari 48", 400);
  }

  if (currentPage < 0) {
    throw new ResponseError("Data tidak ditemukan", 404);
  }

  // Menghitung jumlah total data
  const totalItems = await db.product.count();

  // Menghitung jumlah halaman
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Menghitung jumlah item yang harus ditampilkan dalam halaman terakhir
  const itemsInLastPage = totalItems % itemsPerPage;
  const count = currentPage === totalPages ? itemsInLastPage : itemsPerPage;

  // Mengecek jika page yang dikirim client lebih dari yang ada di data base
  if (page > totalPages) {
    throw new ResponseError("Page yang diminta melebihi page pada data pada database!", 400);
  }

  // Menghitung indeks mulai dan selesai untuk data pada halaman saat ini
  const offset = (currentPage - 1) * itemsPerPage;

  const products = await db.product.findMany({
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

export default { createProductService, productRecomendationService, productsService };
