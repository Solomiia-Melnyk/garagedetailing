$(document).ready(function() {
  // Додавання події "click" на заголовок кожного розділу
  $('.accordion-header').click(function() {
    var content = $(this).next('.accordion-content');
    
    // Згортання / розгортання акордеону
    if (content.is(':visible')) {
      content.slideUp();
    } else {
      content.slideDown();
    }
  });
});
