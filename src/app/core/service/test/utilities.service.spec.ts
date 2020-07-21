import { ProductService } from "../product.service";
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { LoadDataService } from '../load-data.service';
import { UtilitiesService } from '../utilities.service';
import { Configuration } from 'src/app/app.constants';
import { of } from 'rxjs';
import { Product, AccountInformation } from 'src/app/models/card-product-map';


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

    it('should return products group with bank is valid', () => {
        let productList:any
        productList = service.GroupByProduct(
            [{"accountInformation":{"accountIdentifier":"3001101234845","productType":"CERTIFIED_DEPOSIT_TERM","bank":"BANCO_3"},"locked":false,"id":"3001101234845","typeAccount":"CERTIFIED_DEPOSIT_TERM","openedDate":"2002-02-27T00:00:00","closedDate":"2002-05-27T00:00:00","dueDate":"2019-12-03T10:32:13.449","lastTransactionDate":"2019-12-03T10:32:12.42","term":{"count":90,"units":"Days"},"periodicityOfPayment":{"count":90,"units":"Days"},"productAccountBalances":{"saldo_pendiente_pago":{"amount":0},"tasa_nominal":{"amount":0,"rate":13},"interes_pagado":{"amount":0},"valor_constitucion":{"amount":12500000},"intereses_causados":{"amount":135417},"retefuente":{"amount":0}}},{"accountInformation":{"accountIdentifier":"3000011501509","productType":"CERTIFIED_DEPOSIT_TERM","bank":"BANCO_4"},"locked":true,"id":"3000011501509","typeAccount":"CERTIFIED_DEPOSIT_TERM","openedDate":"2006-05-16T00:00:00","closedDate":"2008-05-19T00:00:00","dueDate":"2019-12-03T10:32:15.531","lastTransactionDate":"2019-12-03T10:32:15.27","term":{"count":90,"units":"Days"},"periodicityOfPayment":{"count":30,"units":"Days"},"productAccountBalances":{"saldo_pendiente_pago":{"amount":270734},"tasa_nominal":{"amount":0,"rate":7.25},"interes_pagado":{"amount":0},"valor_constitucion":{"amount":5500000},"intereses_causados":{"amount":33231},"retefuente":{"amount":0}}}]
            ,'bank');
        expect(productList.BANCO_3[0].accountInformation.bank).toEqual('BANCO_3');
        expect(productList.BANCO_3[0].accountInformation.accountIdentifier).toEqual('3001101234845');
        expect(productList.BANCO_3[0].periodicityOfPayment.count).toEqual(90);
        spyOn(<any> configuration, 'isCreditCar').and.returnValue(of(false));
    })

    it('should return product list with creditcard true', () => {
        let productList:any
        spyOn(<any> configuration, 'isCreditCar').and.returnValue(of(true));
        productList = service.GroupByProduct(
            [{"accountInformation":{"accountIdentifier":"3001101234845","productType":"CERTIFIED_DEPOSIT_TERM","bank":"BANCO_3"},"locked":false,"id":"3001101234845","typeAccount":"CERTIFIED_DEPOSIT_TERM","openedDate":"2002-02-27T00:00:00","closedDate":"2002-05-27T00:00:00","dueDate":"2019-12-03T10:32:13.449","lastTransactionDate":"2019-12-03T10:32:12.42","term":{"count":90,"units":"Days"},"periodicityOfPayment":{"count":90,"units":"Days"},"productAccountBalances":{"saldo_pendiente_pago":{"amount":0},"tasa_nominal":{"amount":0,"rate":13},"interes_pagado":{"amount":0},"valor_constitucion":{"amount":12500000},"intereses_causados":{"amount":135417},"retefuente":{"amount":0}}},{"accountInformation":{"accountIdentifier":"3000011501509","productType":"CERTIFIED_DEPOSIT_TERM","bank":"BANCO_4"},"locked":true,"id":"3000011501509","typeAccount":"CERTIFIED_DEPOSIT_TERM","openedDate":"2006-05-16T00:00:00","closedDate":"2008-05-19T00:00:00","dueDate":"2019-12-03T10:32:15.531","lastTransactionDate":"2019-12-03T10:32:15.27","term":{"count":90,"units":"Days"},"periodicityOfPayment":{"count":30,"units":"Days"},"productAccountBalances":{"saldo_pendiente_pago":{"amount":270734},"tasa_nominal":{"amount":0,"rate":7.25},"interes_pagado":{"amount":0},"valor_constitucion":{"amount":5500000},"intereses_causados":{"amount":33231},"retefuente":{"amount":0}}}]
            ,'bank');
        expect(productList.BANCO_3[0].cardcredit).toEqual(true);
    })

    it('should return product list by productType', () => {
        let productList:any
        spyOn(<any> configuration, 'isCreditCar').and.returnValue(of(false));
        productList = service.GroupByProductAllProduct(
            [[{"accountInformation":{"accountIdentifier":"3001101234845","productType":"CERTIFIED_DEPOSIT_TERM","bank":"BANCO_3"},"locked":false,"id":"3001101234845","typeAccount":"CERTIFIED_DEPOSIT_TERM","openedDate":"2002-02-27T00:00:00","closedDate":"2002-05-27T00:00:00","dueDate":"2019-12-03T10:32:13.449","lastTransactionDate":"2019-12-03T10:32:12.42","term":{"count":90,"units":"Days"},"periodicityOfPayment":{"count":90,"units":"Days"},"productAccountBalances":{"saldo_pendiente_pago":{"amount":0},"tasa_nominal":{"amount":0,"rate":13},"interes_pagado":{"amount":0},"valor_constitucion":{"amount":12500000},"intereses_causados":{"amount":135417},"retefuente":{"amount":0}},"cardcredit":false},{"accountInformation":{"accountIdentifier":"5201897302970640","productType":"CREDIT_CARD","bank":"BANCO_3"},"locked":true,"id":"5201897302970640","typeAccount":"CREDIT_CARD","dueDate":"","productAccountBalances":{"pago_total_pesos":{"amount":105968,"currencyCode":"COP"},"cupo_disponible_avances_pesos":{"amount":24894032,"currencyCode":"COP"},"saldo_mora_pesos":{"amount":5000,"currencyCode":"COP"},"saldo_actual":{"amount":105968,"currencyCode":"COP"},"cupo_disponible_compras_pesos":{"amount":24894032,"currencyCode":"COP"},"valor_pago_minimo":{"amount":105968,"currencyCode":"COP"},"cupo_total":{"amount":25000000,"currencyCode":"COP"}},"capacity":99.576128,"cardcredit":false}]]
            ,'productType');
            expect(productList.CREDIT_CARD[0].accountInformation.accountIdentifier).toEqual('5201897302970640');
            expect(productList.CREDIT_CARD[0].accountInformation.bank).toEqual('BANCO_3');
            expect(productList.CREDIT_CARD[0].productAccountBalances.pago_total_pesos.amount).toEqual(105968);
            
    })
});