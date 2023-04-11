import express, {Request, Response, Router} from 'express';

import fileUpload from 'express-fileupload';

import { ApiV1RoutesRoot } from './interfaces/ApiRouter.interface';
import { getAllProducts } from '../../../../../controllers/api/v1/products/Product.controller';



const app: Router = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));


app.get('/', (req: Request, res: Response) => {
  res.status(200).json({message: 'Api V1'})
})


app.use( ApiV1RoutesRoot.products, getAllProducts );

export default app;
