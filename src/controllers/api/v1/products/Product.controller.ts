import { Request, Response } from "express";
import { GetProducts } from "../../../../core/v1/products/interactors/GetProduct.interactor";
import { Product } from "../../../../core/v1/products/entities/Product.entity";

interface Error {
  message: string;
}

export const getAllProducts = async (
  req: Request,
  res: Response<Product[] | Error>
): Promise<Response<Product[]>> => {
  try {
    const products = new GetProducts();

    const data: Product[] = await products.getProducts();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "internal server Error" });
  }
};
