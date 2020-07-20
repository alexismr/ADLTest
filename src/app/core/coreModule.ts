import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Configuration } from '../app.constants';
import { LoadDataService } from './service/load-data.service';
import { ProductService } from './service/product.service';
import { UtilitiesService } from './service/utilities.service';
@NgModule({
    imports: [
        CommonModule
    ]
})


export class CoreModule {
    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [
                Configuration,
                LoadDataService,
                ProductService,
                UtilitiesService
            
            ]
        };
    }
}
