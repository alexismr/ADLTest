import { ProductService } from "../product.service";
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { LoadDataService } from '../load-data.service';
import { UtilitiesService } from '../utilities.service';
import { Configuration } from 'src/app/app.constants';
import { of } from 'rxjs';

describe('ProductService', () => {
    let service: ProductService;
    let serviceUtilities: UtilitiesService;
    let serviceLoadData : LoadDataService;
    let configuration : Configuration;
    let httpTestingController: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                ProductService,
                LoadDataService,
                UtilitiesService,
                Configuration]
        });
        service = TestBed.inject(ProductService);
        serviceUtilities = TestBed.inject(UtilitiesService);
        serviceLoadData = TestBed.inject(LoadDataService);
        configuration = TestBed.inject(Configuration);
        httpTestingController = TestBed.get(HttpTestingController);
    });

        
    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should be product is valid', () => {
        const getListSpyProduct = spyOn(<any>serviceUtilities, 'GroupByProductAllProsuct').and.returnValue(of(''));
        spyOn(<any> serviceLoadData, 'getProductList').and.returnValue({});
        spyOn(<any>serviceUtilities, 'GroupByProduct').and.returnValue(of(''));
        spyOn(<any>configuration, 'getProductFilter').and.returnValue(of('productType'));
          service.getProducts(true);
          expect(getListSpyProduct).toHaveBeenCalled();
    })
});