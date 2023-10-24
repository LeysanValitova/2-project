ymaps.ready(init);
      var myMap,
       myPlacemark1;
      function init() {
        // Creating maps
        myMap = new ymaps.Map("map", {
          center: [43.684345, -79.431292],
          zoom: 14,
        });

        myPlacemark1 = new ymaps.Placemark([43.684345, -79.431292], {
          balloonContentHeader: "8776 Juniper Street Unit #204",
          balloonContentBody: "Merriweather, Ontorio",
          balloonContentFooter: "Canada",
          hintContent: "MINIMAL",
        });

        myMap.geoObjects.add(myPlacemark1);
    }

// Slider

    var slideIndex = 1;
      showSlides(slideIndex);

      // function plusSlides(n) {
      //   showSlides((slideIndex += n));
      // }

      function currentSlide(n) {
        showSlides((slideIndex = n));
      }

      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
          slideIndex = 1;
        }
        if (n < 1) {
          slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
      }