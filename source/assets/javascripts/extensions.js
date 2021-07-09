$(function () {
  let $filter = $(".extensions-filter__input"),
      $groups = $(".extensions-group"),
      $cards = $(".extensions-list-block .extensions-group .extension-info"),
      selectedFilters = [];



  $filter.change(function () {
    selectedFilters = [];

    $filter.filter(":checked").each(function () {
      selectedFilters.push($(this).attr("name"));
    });
    selectedFilters = ".e-" + selectedFilters.join(", .e-");

    $cards.removeClass("deselected").not(selectedFilters).addClass("deselected");

    $groups.each(function () {
      $(this).toggleClass("empty", ($(this).find(".extension-info:not(.deselected)").length === 0));
    });

    if($filter.filter(':checked').length === 0) {
      console.log ("uncheked");
      $groups.toggleClass("empty");
      $cards.toggleClass("deselected");
    }
  });



  var $hiddenGroups = $( ".extensions-filter__navbar__nav .nav-item:nth-last-of-type(-n+7)");
    
  $(".js-more").click(function() {
    $hiddenGroups.addClass("show");
    $(this).hide();
  });
});
