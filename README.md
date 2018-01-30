# **Cardify**

* **Track:** _Common Core_
* **Curso:** _JS Deep Dive: Crea tu propia librería usando JavaScript_
* **Unidad:** _Producto final_
* **Front-ends:** _Aurora Vásquez Sanchez y Jessica Manturano_

***

Implementar un plugin de jQuery que dado un _contenedor_ debe buscar todas las
imágenes que encuentre dentro del _contenedor_ y reemplazarlas por un nuevo
elemento `<figure>` que contenga la imagen (`<img>`) además de un `<figcaption>`
con el texto del atributo `alt` de la imagen.

## Flujo de trabajo
Para el desarrollo de este trabajo estamos haciendo uso de diferentes ramas para evitar conflictos y perdida de informacion cada rama tiene informacion relevante y paso a paso de la funcionalidad de este plugin.

Planificación de trabajo con [Trello](https://trello.com/b/gsC83EJh/cardify-reto-sprint-04)

***

## Snippets

    containerJQ
```html
<div class="container">
  <div class="{:class}">
    <img src="{:address}" alt="{:data}">
  </div>
</div>
```

    PluginJQ
```js
(function ($) {
  $.fn.cardify = function () {

    var containerA = $('.container');

    var pluginImage = function pluginImage(containerX) {
      var searchImage = containerX.find('img');

      console.log(searchImage);

      var _loop = function _loop(i) {
        console.log(searchImage[i]);
        searchImage.css({ 'width': '335px', 'height': '200px', 'border-radius': '10px' });

        var figure = $('<figure style="color:transparent" class="col-lg-4"></figure>');
        figure.append(searchImage[i]);
        $(figure).css({ 'width': 'auto', 'height': '250px', 'text-align': 'center', 'text-transform': 'capitalize', 'font-weight': 'bold' });

        var altImage = $(searchImage[i]).attr('alt');
        var figcaption = $('<figcaption>' + altImage + '</figcaption>');
        figure.append(figcaption);

        containerX.append(figure);
        figure.hover(function () {
          $(searchImage[i]).css({ 'visibility': 'hidden' });
          $(searchImage[i]).animate(4000);
          $(figure).css({ 'color': 'black', 'text-shadow': '0px 0px black' });
          figure.addClass('col-lg-4');
          figcaption.css({ 'font-size': '30px', 'transform': 'translateY(-300%)' });
        }, function () {
          $(searchImage[i]).css({ 'visibility': 'visible' });
          $(searchImage[i]).animate(4000);
          $(figure).css({ 'color': 'white', 'text-shadow': '2px 2px black' });
          figcaption.css({ 'transform': 'translateY(0%)', 'font-size': '20px' });
        });
      };

      for (var i = 0; i < searchImage.length; i++) {
        _loop(i);
      }
    };
    pluginImage(containerA);
  };
})(jQuery);
  ```


##### Funcionalidad:
El plugin de Cardify busca todas las imagenes que se encuentren dentro de un contenedor y semanticamente las coloca dentro de una etiqueta **figure** junto con una etiqueta **figcaption** que adquiere el texto de el atributo **alt** de dicha imagen.Este plugin contiene estilos css y de bootstrap ya definidos.

##### Cómo agregar Cardify a tu proyecto

###### Requisitos previos
Antes de comenzar, necesitarás una app de JavaScript.

###### Agrega Cardify a tu app
Para agregar Cardify a tu app, necesitarás un proyecto de index.html, agregando jQuery en el script de preferencia la ultima version y necesitaras instalar el frameworks Bootstrap version 3.0.0.


```js
<script type="text/javascript" src="vendors/js/jquery-3.2.1.min.js"></script>
```



### Global (navegador)

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="path-to-cardify.js"></script>
```

## Uso

```js
// `container` es el selector del contenedor donde se buscarán todas las
// imágenes a ser procesadas.
$(container).cardify({});
```

## Ejemplos
![Sin titulo](public/assets/docs/1.png)
Asi es como se ve antes de pasar el mouse

![Sin titulo](public/assets/docs/2.png)
Al pasar el mouse se produce un  **hover** que  realiza la funcionalidad del plugin.
