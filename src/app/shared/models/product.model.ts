/* класс, описывающий продукт */
export class Product {
  public id: number; /* id */
  public title: string; /* название */
  public article: string; /* артикул */
  public price: number; /* цена */
  public manufact: string; /* производитель */
  public year: string; /* год */
  public orders: number; /* заказы */
  public camera: string; /* камера */
  public screen: string; /* разрешение экрана */
  constructor(title: string, article: string, price: number, manufact: string,
              year: string, orders: number, camera: string, screen: string, id?: number) {
    this.id = id;
    this.title = title;
    this.article = article;
    this.price = price;
    this.manufact = manufact;
    this.year = year;
    this.orders = orders;
    this.camera = camera;
    this.screen = screen;
  }
}

