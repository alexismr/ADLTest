import { TestBed, fakeAsync, tick, inject } from '@angular/core/testing';

import { LoadDataService } from '../load-data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Configuration } from 'src/app/app.constants';
import { UtilitiesService } from '../utilities.service';
import { Product } from 'src/app/models/card-product-map';

describe('LoadDataService', () => {
    let service: LoadDataService;
    let httpTestingController: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [LoadDataService,
                UtilitiesService,
                Configuration]
        });
        service = TestBed.inject(LoadDataService);
        httpTestingController = TestBed.get(HttpTestingController);
    });

    afterEach(() => {

        httpTestingController.verify();
      });

    
    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return this data in productList', 
    () => {
        let mock = {
            "product": []
            };
  
        service.getloadData$().subscribe((res) => {
            expect(res).toEqual('200');
        })
        const req = httpTestingController.expectOne("../assets/data/data.json");
        expect(req.request.method).toEqual("GET");
        req.flush(mock);
    })
});