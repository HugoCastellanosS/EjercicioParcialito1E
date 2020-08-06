/*
Se debe pedir al usuario, mientras quiera:
	- Nombre de artículo
	- Categoría
	- Precio.
Al finalizar, se debe informar:
	- Nombre de artículo con mayor precio
	- Nombre de artículo con mayor precio, de la categoría lácteos.
	- Cantidad de artículos ingresados de categoría bebidas
Considerar que las categorías pueden ser: almacen, lácteos, limpieza o bebidas y que el precio no puede ser menor a 0 ni mayor a 1000.
*/

function mostrar()
{
	let vArticulo;
	let vCategoría;
	let vPrecio=0;
	let vMayorPrecio=0;
	let bandera=0;
	let bandera2=0
	let vArticuloMayorpre=0;
	let vMayorPreLacteos=0;
	let vNomMayorpreLacteos;
	let vCantBebidas=0;
	let respuesta="s";
	

	    
	do
	{
		vArticulo=prompt("Ingrese el nombre de un articulo: ");
//validacion
		do
		{	
			vCategoría=prompt("Ingrese una categoria: ");

		}while(!(vCategoría=="Almacen"|| vCategoría=="Lacteos"|| vCategoría=="Limpieza" || vCategoría=="Bebidas"));

		do
		{
			vPrecio=parseInt(prompt("Ingrese un precio: "));

		}while(!(vPrecio>0 && vPrecio<=1000));
//fin validacion

		if(bandera==0 || vPrecio > vMayorPrecio)
		{
			vMayorPrecio=vPrecio;
			vArticuloMayorpre=vArticulo;
			bandera=1; //la segunda vez vale 1, y la segunda vez compara
		}
//sa el flag para que entre por esa condición y no por la comparación
//es solo para la primera vez que ingresa
//porque no hay numeros para comparar

		if( (bandera2==0 && vCategoría=="Lacteos") ||(vCategoría=="Lacteos" && vPrecio > vMayorPreLacteos) )
		{
			vMayorPreLacteos=vPrecio;
			vNomMayorpreLacteos=vArticulo;
			bandera2=1;

		}

		if(vCategoría=="Bebidas")
		{
			vCantBebidas++;
		}

		respuesta=prompt("desea continuar? s/n");


	}while(respuesta=="s");


	document.write("El articulo de mayor precio es: "+vArticuloMayorpre) + "<br>";
	document.write("Nombre del articulo con mayor precio de los lacteos es: "+vNomMayorpreLacteos)+"<br>";
	document.write("El numero de bebidas es: "+vCantBebidas)+"<br>";
	
}