import {Card, CardContent, CardHeader, CardMedia, Typography} from '@mui/material';
import {Product} from '@components/interface/products';
import StarIcon from '@mui/icons-material/Star';

const Index = ({product}: {product: Product}) => {
    const image = product.images[product.images.length - 1];

    return (
        <Card style={{height: '100%'}}>
            <CardHeader title={product.title} subheader={
               <div style={{display: 'flex', alignItems: 'center'}}>
                   <StarIcon style={{paddingRight: 5}}></StarIcon>
                   <span>{product.rating}</span>
               </div>
            } titleTypographyProps={{
                fontSize: '1.5rem',
            }}/>
            <CardMedia component='img' height='200' image={image}/>
            <CardContent>
                <Typography variant='body2' color='text.secondary'>
                    {product.description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Index;
