import { Product } from "../entities/Product.entity";
import { ProductRepository } from "../repository/Product.repository";

export class GetProducts extends ProductRepository {
  constructor() {
    super();
  }

  async getProducts(): Promise<Product[]> {
    const products = await super.getProducts();
    return products.map<Product>((product) =>
      new ProductFormatter(product).formatProducts()
    );
  }
}

export class ProductFormatter {
  private _product: Product;

  constructor(product: Product) {
    const {
      title,
      price,
      discountPercentage,
      rating,
      category,
      ...productData
    } = product;

    this._product = {
      title: this.deleteSpecialCharacters(product.title),
      price: this.rounderPrice(product.price).toFixed(2) as unknown as number,
      discountPercentage: Math.round(product.discountPercentage),
      rating: this.rounderRating(product.rating),
      category: this.reverseString(product.category),
      ...productData,
    };
  }

  formatProducts(): Product {
    return { ...this._product };
  }

  deleteSpecialCharacters(text: string) {
    const specialCharactersRegex = /[,.\\-]/;
    return text.replace(specialCharactersRegex, "");
  }

  rounderPrice(value: number) {
    const decimal: number = value % 1;
    const integer: number = value - decimal;

    if (decimal < 0.6) return integer;

    return integer + 0.9;
  }

  rounderRating(value: number) {
    const decimal: number = value % 1;
    const integer: number = value - decimal;

    return decimal < 0.6 ? integer : integer + 1;
  }

  reverseString(text: string) {
    return text.split("").reverse().join("");
  }

}
