import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product-list/product';
import { ProductService } from '../product.service';

@Component({
  //selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private _productService;
   
  pageTitle: string = 'Product List!';
  imageWidth: number =  50;
  imageMargin: number = 2;
  showImage: boolean = false;
  _listFilter: string;
  errorMessage: string = ''; 

  get listFilter(): string{
    return this._listFilter;
  }
  set listFilter(value: string){
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }


  // sera utilizado para poder fazer o filtro.
  filteredProducts: IProduct[];
  products: IProduct[] = [];

  constructor(private productService: ProductService ){
    this._productService = productService;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
    
  }
  
  // recebe a mensagem do component star pela propriedade ratingClicked do tipo EventEmiter
  onRatingClicked(message: string) : void {
    this.pageTitle = 'Product List: ' + message;
  }

  // faz a procura cada vez que o input da tela receber um novo valor.
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => 
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toogleImage(): void{
    this.showImage = !this.showImage;
  }
}
