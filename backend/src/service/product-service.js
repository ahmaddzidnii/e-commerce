import { db } from "../../lib/db.js";
import { ResponseError } from "../error/response-error.js";
import { categoryEnumToText } from "../utils/category.js";
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
  const { page, limit, category, shortBy, order } = req.query;

  // Keperluan filter res

  let SHORT_BY = undefined;
  let ORDER = undefined;

  // category
  const selectedCategory = categoryEnumToText(category);

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
  const totalItems = await db.product.count({
    where: {
      category: selectedCategory,
    },
  });

  // Menghitung jumlah halaman
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Menghitung jumlah item yang harus ditampilkan dalam halaman terakhir
  const itemsInLastPage = totalItems % itemsPerPage;
  const count = currentPage === totalPages ? itemsInLastPage : itemsPerPage;

  // Mengecek jika page yang dikirim client lebih dari yang ada di data base
  if (page > totalPages) {
    throw new ResponseError("Product tidak ditemukan!", 404);
  }

  // Menghitung indeks mulai dan selesai untuk data pada halaman saat ini
  const offset = (currentPage - 1) * itemsPerPage;

  let products = await db.product.findMany({
    take: itemsPerPage,
    skip: offset,

    where: {
      category: selectedCategory,
    },
  });

  if (shortBy === "price") {
    SHORT_BY = "price";
    products = products.sort((a, b) => {
      const priceA = parseInt(a.price.replace(/[^0-9]/g, ""));
      const priceB = parseInt(b.price.replace(/[^0-9]/g, ""));

      if (order === "asc") {
        ORDER = "asc";
        return priceA - priceB;
      } else if (order === "desc") {
        ORDER = "desc";
        return priceB - priceA;
      }
    });
  }

  // Kondisi dimana tidak memiliki halaman selanjutnya
  const hasNextPage = totalPages === currentPage ? false : true;

  // Kondisi dimana tidak memiliki halaman sebelumnya
  const hasPrevPage = currentPage === 1 ? false : true;

  const data = {
    metadata: {
      category: selectedCategory ? selectedCategory : "all",
      shortBy:
        SHORT_BY && ORDER
          ? {
              filter: SHORT_BY,
              order: ORDER,
            }
          : null,
    },
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
