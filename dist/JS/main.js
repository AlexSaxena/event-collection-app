console.log("Hello There");
$(document).ready(function () {
  // Eventlisteners / ClickEvents
  $(".grid-item-1").click((event) => {
    cardExpand(".grid-item-1");
    event.stopPropagation();
  });

  $(".grid-item-2").click((event) => {
    cardExpand(".grid-item-2");
    event.stopPropagation();
  });

  $(".grid-item-3").click((event) => {
    cardExpand(".grid-item-3");
    event.stopPropagation();
  });

  $(".grid-item-4").click((event) => {
    cardExpand(".grid-item-4");
    event.stopPropagation();
  });

  $(".grid-item-5").click((event) => {
    cardExpand(".grid-item-5");
    event.stopPropagation();
  });

  $(".grid-item-6").click((event) => {
    cardExpand(".grid-item-6");
    event.stopPropagation();
  });

  // Functions
  function cardExpand(selectedCard) {
    $(`${selectedCard}-expand`).toggleClass("active");
    $(`${selectedCard}-expand`).css({
      "z-index": "1000",
    });
  }
});
