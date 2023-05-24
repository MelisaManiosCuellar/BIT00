const modal__one = document.querySelector(".modal__one");
const modal__two = document.querySelector(".modal__two");
const modal__three = document.querySelector(".modal__three");

const closeIcon = document.querySelector(".modal__content--close");
const closeIcon2 = document.querySelector(".modal__content--close2");
const closeIcon3 = document.querySelector(".modal__content--close3");

const button1 = document.querySelector("#button__one");
const button2 = document.querySelector("#button__two");
const button3 = document.querySelector("#button__three");

button1.addEventListener("click", () => {
  modal__one.classList.remove("hidden");
  modal__one.classList.add("visible");
});
closeIcon.addEventListener("click", () => {
  modal__one.classList.remove("visible");
  modal__one.classList.add("hidden");
});

button2.addEventListener("click", () => {
  modal__two.classList.remove("hidden");
  modal__two.classList.add("visible");
});
closeIcon2.addEventListener("click", () => {
  modal__two.classList.remove("visible");
  modal__two.classList.add("hidden");
});

button3.addEventListener("click", () => {
  modal__three.classList.remove("hidden");
  modal__three.classList.add("visible");
});
closeIcon3.addEventListener("click", () => {
  modal__three.classList.remove("visible");
  modal__three.classList.add("hidden");
});
$(document).ready(function () {
  $(".contenedor-formularios")
    .find("input, textarea")
    .on("keyup blur focus", function (e) {
      var $this = $(this),
        label = $this.prev("label");

      if (e.type === "keyup") {
        if ($this.val() === "") {
          label.removeClass("active highlight");
        } else {
          label.addClass("active highlight");
        }
      } else if (e.type === "blur") {
        if ($this.val() === "") {
          label.removeClass("active highlight");
        } else {
          label.removeClass("highlight");
        }
      } else if (e.type === "focus") {
        if ($this.val() === "") {
          label.removeClass("highlight");
        } else if ($this.val() !== "") {
          label.addClass("highlight");
        }
      }
    });

  $(".tab a").on("click", function (e) {
    e.preventDefault();

    $(this).parent().addClass("active");
    $(this).parent().siblings().removeClass("active");

    target = $(this).attr("href");

    $(".contenido-tab > div").not(target).hide();

    $(target).fadeIn(600);
  });
});
