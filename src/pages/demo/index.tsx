import useProductFetch from '@components/lib/products';
import ProductCard from '@components/components/product-card';
import {Product} from '@components/interface/products';
import Grid from '@mui/material/Grid';

const Index = () => {
    const products: Product[] | null = useProductFetch();

    return (
        <Grid container spacing={2} columns={12}>
            {
                products && products?.map((product: Product) => (
                    <Grid item key={product.id} sm={4}>
                        <ProductCard product={product}/>
                    </Grid>
                ))
            }
        </Grid>
    );
};
export default Index;
