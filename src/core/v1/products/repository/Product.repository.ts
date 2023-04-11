import { Product } from "../entities/Product.entity";
import { productData } from "./product.data";

export class ProductRepository {
  private readonly data: Product[];

  constructor() {
    this.data = productData;
  }

  async getProducts(): Promise<Product[]> {
    return [...this.data];
  }
}
