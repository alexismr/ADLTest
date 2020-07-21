# ADLTest

 Angular Cli  version 10.0.3.

## ambiente DEV
 configuraciones por defecto de nagular cli 
  Run `ng serve`  -> `http://localhost:4200/`.

## <a name="1"></a>Project structure
- **core**_ modulo de servicios _
	- **services** _ modulo de servicios  _
       - **load-data.service.ts** _ servicio para leer la informacion del archivo data.json_
        - **product.service.ts** _servicio que contiene logica para obtener el listado de productos_
        - **utilities.service.ts** _servicio que contiene funciones comunes_
    - **coreModule.ts** _ declaracion del modulo de servicios _
    
- **home**_ modulo que carga los productos _
	- **components** _compònentes para mostrar productos_	
       - **CardProduct** _ componente que mustra la informacion del producto_
        - **CarouselProduct** _componente de carousel_
        - **ProductHeader** _Componente que muestra el boton  de consultar mas productos y el carousel_
        - **Products** _Componente que consulta la lista de productos_
   - **home.module.ts** _ modulo del  los componentes home _
   - **home.routes.ts** _ rutas del modulo home permite - Angular [Lazy-loading modules with the router](https://angular.io/guide/ngmodule#lazy-loading-modules-with-the-router) _

- **models**_ DTO , POCO _
	- **card-product-map.ts** _ map de productos_	
  
- **shared**_ modulo que carga los productos _
	- **components** _compònentes comunes en la aplicacion_	
       - **header** _ _
        - **progressbar** _ _
        - **sidebar** _ _
        - **slideButton** _ _
 	- **pipe** _compònentes para mostrar productos_	
       - **creditcardnumber.pipe.ts** _ Enmascara el numero de la tarjeta de credito _
        - **stringdate.pipe.ts** _convierte string to date _
        - **visamaster.pipe.ts** _valida si la tarjeta es visa o mastercar _
   - **sharedModule.ts** _ modulo del  los componentes home _


## breakpoints

Solo se crearon 2 breakpoints  básicos uno en el componete header y el otro en el componete productos 

se valida si el tamaño corresponde al de un dispositivo movil 
 -  primer breakpoint (header) cambia el estilo del menu de informacion del usuario 
 - segundo breakpint (productos) modifica  el estilo de las tarjetas de produtos.


## Notas:

  - para el campo fecha de pago se tomo  el como referencia el campo dueDate del data.json
  - se modifico la informacion del objeto 5201897302970640 del banco 3 con el fin de mostar la barra progreso 
<<<<<<< HEAD

## soporte docker 
  - crear contenedor
`docker run --rm -d  -p 80:80/tcp alexismr01/adl-test:latest`
 - abrir el navegador en la siguiente ruta  http://localhost:80/ 
  

## URL 

http://alexistestadl.brazilsouth.azurecontainer.io/
  
  

# ADLTest
