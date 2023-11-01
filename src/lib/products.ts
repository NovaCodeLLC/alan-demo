import {useEffect, useState} from 'react';
import {Product} from '@components/interface/products';

type ProductResponse = {
  limit: number;
  total: number,
  skip: number,
  products: Product[]
}

  const useProductFetch = (): Product[] | null => {
    const [data, setData]= useState<Product[]>([]);
    const url = 'https://dummyjson.com/products';

    useEffect(() => {
      fetch(url)
          .then((res) => res.json())
          .then((data : ProductResponse) => setData(data.products));
    }, [url]);

    return data;
  };

  export default useProductFetch;
