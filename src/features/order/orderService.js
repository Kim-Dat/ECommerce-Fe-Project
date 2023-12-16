import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";

const createOrder = async (orderData) => {
    const res = await axios.post(`${base_url}order/create`, orderData, config);
    return res.data;
};
const getOrders = async () => {
    const res = await axios.get(`${base_url}order/`, config);
    return res.data;
};

const orderService = {
    createOrder,
    getOrders,
};

export default orderService;
