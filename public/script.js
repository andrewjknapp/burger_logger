$('#orderlist').on('click', function(event) {
    if(event.target.matches('button')) {
        let id = event.target.getAttribute('identifier');
        $.ajax("/api/burger/" + id, {
          type: "PUT"
        }).then(
          function() {
            console.log("updated id ", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
    }
})

$('#burgerClear').on("click", function(event) {
  $.ajax("/api/burger", {
    type: "DELETE"
  }).then(
    function() {
      console.log("Deleted Eaten Column");
      location.reload();
    }
  )
})