(function($) {
    $.fn.isSticky = function() {
      var element = this;
      var elementHeight = element.outerHeight();
      var parent = element.parent();
      var parentOffsetTop = parent.offset().top;
      var spacer = $('<div />').css({
        height: elementHeight + 'px',
        display: 'none' // S'assure que le spacer est initialement caché
      });
      // Insère le spacer dans le document mais ne l'affiche pas encore
      element.before(spacer);
  
      function checkSticky() {
        var scrollTop = $(window).scrollTop();
        var elementTopPosition = element.offset().top;
        var parentBottomPosition = parentOffsetTop + parent.outerHeight() - elementHeight; // Calcule la position du bas du parent moins la hauteur de l'élément
        
        // Vérifie si l'élément doit devenir sticky
        if (scrollTop > parentOffsetTop && scrollTop < parentBottomPosition) {
          if (!spacer.is(':visible')) {
            spacer.show(); // Affiche le spacer seulement quand l'élément devient sticky
          }
          element.addClass('is-sticky');
        } else {
          spacer.hide(); // Cache le spacer quand l'élément n'est plus sticky
          element.removeClass('is-sticky');
        }
      }
  
      // Attache l'événement de scroll à la fenêtre et appelle checkSticky lors du défilement
      $(window).scroll(checkSticky);
  
      // Appelle checkSticky immédiatement au cas où la page serait déjà défilée au chargement
      checkSticky();
  
      // Permet la chaînage en retournant 'this'
      return this;
    };
  })(jQuery);
  
  // Utilisation
  $(document).ready(function() {
    console.log("faire le css pour is-sticky si il n'est pas présent");
    $(".is-sticky").isSticky();
  });
  