ChechuCarousel [Responsive design]
================================

**Zepto or jQuery Plugin: ChechuCarousel offers and easy way of displaying html or images with nice css transitions**

Try ChechuCarousel here : http://digitatis.com/codecanyon/ChechuCarousel/example.html

Options :
---------
```
autoplay                    Default : true              Type : Boolean
duration                    Default : 4000              Type : Number
pagination                  Default : true              Type : Boolean
arrows                      Default : true              Type : Boolean
```
JavaScript (Plugin call) :
---------

```
 <!-- First Carousel -->
 $('#homeCarousel').ChechuCarousel({arrows:true});
 <!-- Second Carousel -->
 $('#homeCarousel_two').ChechuCarousel(
    {autoplay:true,pagination:true,arrows:true,duration:3000}
 );
```
Basic html usage:
---------
```
    <div id="homeCarousel">
      <div id="homeCarouselInner" class="carousel-window">
        <ul>
         <li>
           <a href="#">
            <img src="http://dummyimage.com/915x400/000/fff.gif&text=IMAGE+1" alt="placeholder+image">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="http://dummyimage.com/915x400/ab09ab/ffffff.gif&text=IMAGE+2" alt="placeholder+image">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="http://dummyimage.com/915x400/2734c2/ffffff.gif&text=IMAGE+3" alt="placeholder+image">
          </a>
        </li>
      </ul>
      <div id="loading">
        <img src="./img/loader.gif">
      </div>
      <div class="arrowLeft"><</div>
      <div class="arrowRight">></div>
    </div>
    <div class="pagination"><!-- Pager dots [0 0 0] --></div>
  </div>
```
![enter image description here][1]


  [1]: http://www.digitatis.com/imagenes/carousel.jpg
