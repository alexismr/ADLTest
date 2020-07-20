import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductsComponent } from './products.component';

import { LoadDataService } from 'src/app/core/service/load-data.service';
import { ProductService } from 'src/app/core/service/product.service';
import { UtilitiesService } from 'src/app/core/service/utilities.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Configuration } from 'src/app/app.constants';


describe('ProductsComponent', () => {
  let services =   LoadDataService;
  let productService = ProductService;
  let component: ProductsComponent;
  let fixtureDebug: ComponentFixture<ProductsComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ProductsComponent
      ],
      providers:[
        LoadDataService,
        ProductService,
        UtilitiesService,
        HttpClient,
        Configuration,
        HttpHandler
      ]
    }).compileComponents();
  }));

      
  beforeEach(() => {
    fixtureDebug = TestBed.createComponent(ProductsComponent);
    component = fixtureDebug.componentInstance;
    fixtureDebug.detectChanges();
   });

  // it('validar_component_exit', () => {
  //   const fixture = TestBed.createComponent(ProductsComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });



  it(`should have as title 'ADLTest'`, () => {
    expect(component.allProducts).toEqual(false);
  });

  describe('ngOnInit()', () => {
    it('should be return data', () => {
      const getData = spyOn(<any> component, 'getAllData');
      component.ngOnInit();
      expect(getData).toHaveBeenCalled();
    })
  })




  // it('Validar_existe_componente', () => {
    
  // });

  // it('validar_campo_allProducts_boolean ', () => {
  //    expect( typeof component.allProducts).toEqual('boolean')
  // })

  // it('validar_campo_allProducts_boolean ', () => {
  //   expect(component.allProducts).toEqual(false);
  // });

});


  
  

