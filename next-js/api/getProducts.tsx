import { API } from '@/app/api';
import { ProductModel } from '@/interfaces/product.interface';
import axios from 'axios';

export async function getProducts(category: string): Promise<ProductModel[]> {
    
    const { data: products } = await axios.post<ProductModel[]>(API.product.find, {
        category: category,
        limit: 10
    });
    return products;
}
