import searchProductService from "../service/search-product-service.js";

const searchHintController = async (req, res, next) => {
  try {
    const data = await searchProductService.searchHintService(req);
    res.json(data);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const searchProductController = async (req, res, next) => {
  try {
    const data = await searchProductService.searchProductService(req);
    res.json(data);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export default {
  searchHintController,
  searchProductController,
};
