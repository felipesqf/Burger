$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("newdevoured");
      var newDevouredState = {
        devoured: newDevoured
      };
  
      // put request
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured to", newDevoured);
          // reload the list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      //  preventDefault 
      event.preventDefault();
      var newBurger = {
        name: $("#bu").val().trim()
      };
  
      // post request
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new Burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  