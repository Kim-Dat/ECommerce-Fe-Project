import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/product/productSlice";

const Store = () => {
    const [grid, setGrid] = useState(3);
    /* option sidebar */
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);
    /* filter State */
    const [category, setCategory] = useState(null);
    const [brand, setBrand] = useState(null);
    const [tag, setTag] = useState(null);
    const [minPrice, setMinPrice] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);
    const [sort, setSort] = useState(null);

    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products) || [];
    const gridSetter = (i) => {
        setGrid(i);
    };
    useEffect(() => {
        dispatch(getProducts({ sort, tag, brand, category, minPrice, maxPrice }));
    }, [sort, tag, brand, category, minPrice, maxPrice]);

    useEffect(() => {
        let newBrands = [];
        let newCategories = [];
        let newTags = [];
        for (let index = 0; index < products.length; index++) {
            const element = products[index];
            newBrands.push(element.brand);
            newCategories.push(element.category);
            newTags.push(element.tags);
        }
        setBrands(newBrands);
        setCategories(newCategories);
        setTags(newTags);
    }, []);

    return (
        <>
            <BreadCrumb title={"Store"} />
            <Container class1={"store-wrapper home-wrapper-2 py-5"}>
                <div className="row">
                    <div className="col-3">
                        <div className="filter-card mb-3">
                            <h3 className="fw-semibold">Shop By Categories</h3>
                            <div className="p-3">
                                <ul className="fs-4 ps-3">
                                    {categories &&
                                        [...new Set(categories)].map((item, index) => {
                                            return (
                                                <li key={index} onClick={() => setCategory(item)}>
                                                    {item}
                                                </li>
                                            );
                                        })}
                                </ul>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="fw-semibold">Filter By</h3>
                            <div className="mt-4">
                                <h4 className="p-3 fw-semibold">Price</h4>
                                <div className="d-flex gap-3 ms-3 fs-5">
                                    <div className="form-floating">
                                        <input type="number" className="form-control" id="floatingInput" placeholder="From" onChange={(e) => setMinPrice(e.target.value)} />
                                        <label htmlFor="floatingInput">From</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="number" className="form-control" id="floatingInput" placeholder="To" onChange={(e) => setMaxPrice(e.target.value)} />
                                        <label htmlFor="floatingInput">To</label>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h4 className="px-3 fw-semibold">Product Tags</h4>
                                <div  className="p-3">
                                    <div className="d-flex flex-wrap align-items-center gap-3">
                                        {tags &&
                                            [...new Set(tags)].map((item, index) => {
                                                return (
                                                    <span key={index} onClick={() => setTag(item)} className="badge bg-light text-secondary rounded-3 py-2 px-3 fs-5">
                                                        {item}
                                                    </span>
                                                );
                                            })}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h3 className="p-3 fw-semibold">Product Brands</h3>
                                <div className="p-3">
                                    <div className="d-flex flex-wrap align-items-center gap-3">
                                        {brands &&
                                            [...new Set(brands)].map((item, index) => {
                                                return (
                                                    <span key={index} onClick={() => setBrand(item)} className="badge bg-light text-secondary rounded-3 py-2 px-3 fs-5">
                                                        {item}
                                                    </span>
                                                );
                                            })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="filter-sort-grid mb-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center gap-5 fs-4">
                                    <p className="d-block" style={{ width: "100px" }}>
                                        Sort By:
                                    </p>
                                    <select name="" className="form-control form-select fs-4" defaultValue={"best-selling"} id="" onChange={(e) => setSort(e.target.value)}>
                                        <option className="fs-4" value={"title"}>
                                            Alphabetical, A-Z
                                        </option>
                                        <option className="fs-4" value={"-title"}>
                                            Alphabetical, Z-A
                                        </option>
                                        <option className="fs-4" value={"price"}>
                                            Price , low to high
                                        </option>
                                        <option className="fs-4" value={"-price"}>
                                            Price , high to low
                                        </option>
                                        <option className="fs-4" value={"created"}>
                                            Date, old to new
                                        </option>
                                        <option className="fs-4" value={"-created"}>
                                            Date, new to old
                                        </option>
                                    </select>
                                </div>
                                <div className="d-flex align-items-center gap-4 fs-4">
                                    <p className="totalProducts">{products?.length} Products</p>
                                    <div className="grid">
                                        <div className="grid-item" onClick={() => gridSetter(3)}>
                                            <img src="/images/gr4.svg" className="d-block img-fluid" alt="grid" />
                                        </div>
                                        <div className="grid-item" onClick={() => gridSetter(4)}>
                                            <img src="/images/gr3.svg" className="d-block img-fluid" alt="grid" />
                                        </div>
                                        <div className="grid-item" onClick={() => gridSetter(6)}>
                                            <img src="/images/gr2.svg" className="d-block img-fluid" alt="grid" />
                                        </div>
                                        <div className="grid-item" onClick={() => gridSetter(12)}>
                                            <img src="/images/gr.svg" className="d-block img-fluid" alt="grid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="products-list pb-5">
                            <div className="row g-3">
                                <ProductCard data={products} grid={grid} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Store;
