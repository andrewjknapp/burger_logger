$('#orderlist').on('click', function(event) {
    if(event.target.matches('button')) {
        let id = event.target.getAttribute('identifier');
        $.ajax("/devour/" + id, {
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