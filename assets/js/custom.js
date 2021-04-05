$(document).ready(function () {
  $(".btn-number").click(function (e) {
    e.preventDefault();

    fieldName = $(this).attr("data-field");
    type = $(this).attr("data-type");
    var input = $("input[name='" + fieldName + "']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
      if (type == "minus") {
        if (currentVal > input.attr("min")) {
          input.val(currentVal - 1).change();
        }
        if (parseInt(input.val()) == input.attr("min")) {
          $(this).attr("disabled", true);
        }
      } else if (type == "plus") {
        if (currentVal < input.attr("max")) {
          input.val(currentVal + 1).change();
        }
        if (parseInt(input.val()) == input.attr("max")) {
          $(this).attr("disabled", true);
        }
      }
    } else {
      input.val(0);
    }
  });
  $(".input-number").focusin(function () {
    $(this).data("oldValue", $(this).val());
  });
  $(".input-number").change(function () {
    minValue = parseInt($(this).attr("min"));
    maxValue = parseInt($(this).attr("max"));
    valueCurrent = parseInt($(this).val());

    name = $(this).attr("name");
    if (valueCurrent >= minValue) {
      $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr(
        "disabled"
      );
    } else {
      alert("Sorry, the minimum value was reached");
      $(this).val($(this).data("oldValue"));
    }
    if (valueCurrent <= maxValue) {
      $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr(
        "disabled"
      );
    } else {
      alert("Sorry, the maximum value was reached");
      $(this).val($(this).data("oldValue"));
    }
  });
  $(".input-number").keydown(function (e) {
    // Allow: backspace, delete, tab, escape, enter and .
    if (
      $.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
      // Allow: Ctrl+A
      (e.keyCode == 65 && e.ctrlKey === true) ||
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)
    ) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if (
      (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
      (e.keyCode < 96 || e.keyCode > 105)
    ) {
      e.preventDefault();
    }
  });
  $(".product-op-a").click(function (e) {
    $(".product-price-title").html("3,50 €");
  });
  $(".product-op-b").click(function (e) {
    $(".product-price-title").html("2,80 €");
  });
  $(".product-op-c").click(function (e) {
    $(".product-price-title").html("2,10 €");
  });

  // Carousel Slider
  var data = {
    products: [
      {
        title: "Dulcita",
        image:
          "https://festival-supermarkt.de/fuchsbau/wp-content/uploads/sites/2/2019/07/og-005-Tomaten-600x600.jpg",
      },
      {
        title: "Cherry Tomaten",
        image:
          "https://festival-supermarkt.de/fuchsbau/wp-content/uploads/sites/2/2019/07/og-005-Tomaten-600x600.jpg",
      },
      {
        title: "Champignon",
        image:
          "https://festival-supermarkt.de/fuchsbau/wp-content/uploads/sites/2/2019/07/og-005-Tomaten-600x600.jpg",
      },
      {
        title: "a title",
        image:
          "https://festival-supermarkt.de/fuchsbau/wp-content/uploads/sites/2/2019/07/og-005-Tomaten-600x600.jpg",
      },
      {
        title: "b title",
        image:
          "https://festival-supermarkt.de/fuchsbau/wp-content/uploads/sites/2/2019/07/og-005-Tomaten-600x600.jpg",
      },
      {
        title: "c title",
        image:
          "https://festival-supermarkt.de/fuchsbau/wp-content/uploads/sites/2/2019/07/og-005-Tomaten-600x600.jpg",
      },
      {
        title: "d title",
        image:
          "https://festival-supermarkt.de/fuchsbau/wp-content/uploads/sites/2/2019/07/og-005-Tomaten-600x600.jpg",
      },
      {
        title: "e title",
        image:
          "https://festival-supermarkt.de/fuchsbau/wp-content/uploads/sites/2/2019/07/og-005-Tomaten-600x600.jpg",
      },
      {
        title: "f title",
        image:
          "https://festival-supermarkt.de/fuchsbau/wp-content/uploads/sites/2/2019/07/og-005-Tomaten-600x600.jpg",
      },
      {
        title: "g title",
        image:
          "https://festival-supermarkt.de/fuchsbau/wp-content/uploads/sites/2/2019/07/og-005-Tomaten-600x600.jpg",
      },
    ],
  };
  $.each(data.products, function (k, v) {
    var title = v.title;
    var image = v.image;
    var product = `<div class="swiper-slide"><div class="card" style="width: 18rem;">
      <img src="${image}" class="card-img-top" alt="...">
      <div class="card-body pt-0">
        <h5 class="card-title h6 mb-1">${title}</h5>
        <p class="card-text small">Globus</p>
      </div>
    </div>
  </div>`;
    $(".carousel-slider-data").append(product);
  });

  // Initialize Swiper
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 3,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 10,
        slidesPerGroup: 5,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 10,
        slidesPerGroup: 5,
      },
    },
  });
});
