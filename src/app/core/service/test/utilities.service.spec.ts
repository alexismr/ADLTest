import { ProductService } from "../product.service";
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { LoadDataService } from '../load-data.service';
import { UtilitiesService } from '../utilities.service';
import { Configuration } from 'src/app/app.constants';
import { of } from 'rxjs';

describe('UtilitiesService', () => {
    let service: UtilitiesService;
    let configuration : Configuration;
    let httpTestingController: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                UtilitiesService,
                Configuration]
        });
        service = TestBed.inject(UtilitiesService);
        configuration = TestBed.inject(Configuration);
        httpTestingController = TestBed.get(HttpTestingController);
    });

        
    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    // it('should be product is valid', () => {
    //     service.GroupByProduct({},'');
    //     spyOn(<any> configuration, 'isCreditCar').and.returnValue(of(false));
    // })
});