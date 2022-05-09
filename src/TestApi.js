import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.production.min';
import ProductApi from './api/ProductApi';

const TestApi = () =>{

    const [productList, setProductList] = useState([]);
 useEffect(() => {
 const fetchProductList = async () => {
 try {
 const params = { _page: 1, _limit: 10 };
 const response = await ProductApi.getAll(params);
 console.log('Fetch products successfully: ');
 setProductList(response.data);
 } catch (error) {
 console.log('Failed to fetch product list: ', error);
 }
 }
 fetchProductList();
 }, []);


    return(
        <div>
            tuananh
        </div>
    )
}
export default TestApi