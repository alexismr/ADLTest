import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server = 'cadena de conexion api';
    public DefaultProduct = 'BANCO_1';
    public ProductTypeFilter = "productType";
    public BackTypeFilter = "bank";
}