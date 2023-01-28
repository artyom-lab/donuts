$(function() {

  $(document).on('click.bs.dropdown.data-api', '.dropdown-menu', function (e) { 
	e.stopPropagation();
  });


  Waves.attach('.btn-donate');
  Waves.attach('.btn',  ['waves-light']);
  Waves.init();

  $(".owl-1").owlCarousel({
    items: 1,
    dots: true,
    margin: 15,
    smartSpeed: 1000,
  });

});

