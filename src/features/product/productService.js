import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";

const getProducts = async (data) => {
    const res = await axios.get(
        `${base_url}product?${data?.brand ? `brand=${data.brand}&&` : ""}${
            data?.tag ? `tags=${data.tag}&&` : ""
        }${data?.category ? `category=${data.category}` : ""}${
            data?.minPrice ? `price[gte]=${data.minPrice}&&` : ""
        }${data?.maxPrice ? `price[lte]=${data.maxPrice}&&` : ""}${
            data?.sort ? `sort=${data.sort}&&` : ""
        }`
    );
    return res.data;
};

const addToWishList = async (id) => {
    const res = await axios.patch(
        `${base_url}product/wishlist`,
        { prodId: id },
        config
    );
    return res.data;
};

const getProduct = async (id) => {
    const res = await axios.get(`${base_url}product/${id}`);
    return res.data;
};
const rating = async (data) => {
    console.log(data);
    const res = await axios.put(`${base_url}product/rating`, data, config);
    return res.data;
};

const productService = {
    getProducts,
    addToWishList,
    getProduct,
    rating,
};

export default productService;
