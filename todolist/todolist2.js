// what user can do
//
// add things to list
function addToList(task){
  //append li to ul
  //be able to edit tasks on list****
  const taskHtml = ('<li>'+ "<span>" + task + "</span>" +' <a class="editAnchor ninja" href="#">' + "edit" + "</a>" + ' <a class="removeAnchor ninja" href="#">' + "remove" + "</a>"+ '</li>' )
  $("ul").append(taskHtml)
  console.log(task)
  tocount()
}

//event listeners for add
$('#add').on("submit", function(event){
  event.preventDefault()
  // console.log("submit");
  //make var for task input
  let newTask = $("input").val()
  addToList(newTask)
  console.log(newTask)
})


//click completed items
// $("a").on("click", function(){
//   $("a").css("color", "red")
// })

//mark tasks as complete
//click to reverse completion status
$('.doList').on("click", "li", function(){
  $(this).toggleClass('complete');
});


function tocount(){
  var c = $("li").length;
  console.log(c);
  $("#counter").text("You Have " + c + " things to do!")

};

// tocount()
// $("#clearAll").on("click", clear)
//event listener for clear All
function clearAllTasks() {
  $("li").remove()
  $(".edit").remove()
  $(".remove").remove()
}

//create clear completed tasks
//delete tasks that are completed
function clearCompletedTasks(){
  $("li.complete").remove()
  $(".edit").parent().remove()
  $(".remove").parent().remove()
  tocount()
}

$("#clearDone").on("click", clearCompletedTasks);
$('#clearAll').on("click", clearAllTasks)

// $(document).on("click", '.edit', function () {
//     // edit the list
//       $(this).parent().prop("contenteditable", true).focus();
//     return false;
//   });

// on mouse enter, the edit shows
// $("ul").on("mouseenter", "li", function() {
//   $("a", this).toggleClass("ninja");
// })
// // on mouse leave the edit and remove dissapears
//   .on("mouseleave", "li", function() {
//     $("a", this).toggleClass("ninja");
//   })


$("ul").on("click", ".removeAnchor", function(){
   $(this).parent().remove();
   tocount()
  });

$("ul").on("click", ".editAnchor", function(){
  // alert("clicked");
    let letter = $(this).parent().find("span").text()
    alert(letter);
         $(this).parent().html("<input type='text'  value='"+letter+"' class='input_edit' />" + "<button class='confirm_button'>" + "confirm" + "</button>");
         $(this).parent().html("<p> jhyjyj</p>")
         $(".confirm_button").on("click" , function(){
            let newItem = $(".input_edit").val();
            $(this).parent().html(newItem + ' <a class="editAnchor" href="#">' + "edit" + "</a>" + ' <a class="removeAnchor" href="#">' + "remove" + "</a>" +"</li>");
         })
});

$("ul").on("mouseenter", "li", function() {
  $("a", this).toggleClass("ninja");
})
// on mouse leave the edit and remove dissapears
  .on("mouseleave", "li", function() {
    $("a", this).toggleClass("ninja");
  })

// $('.remove').on("click", function () {
//   // remove from the list
//   $(this).parent(".doList").remove()
// });


//
// $(document).ready(function(){
//    $("#addTask").on("click",function(){
//       var task = $("#task").val();
//       $("#task").val("");
//       $("#list").append("<li>"+ task + ' <a class="editAnchor" href="#">' + "edit" + "</a>" + ' <a class="removeAnchor" href="#">' + "remove" + "</a>" +"</li>");
//       $(".removeAnchor").on("click", function(){
//          $(this).parent().remove();
//       });
//       $(".editAnchor").on("click", function(){
//          $(this).parent().html("<input type='text' class='input_edit' />" + "<button class='confirm_button'>" + "confirm" + "</button>");
//          $(".confirm_button").on("click" , function(){
//             let newItem = $(".input_edit").val();
//             $(this).parent().html(newItem + ' <a class="editAnchor" href="#">' + "edit" + "</a>" + ' <a class="removeAnchor" href="#">' + "remove" + "</a>" +"</li>");
//          })
//       });
//    });
// });

// $(document).on("click", '.remove', function ()
// }




//what user can see
//can see things on List
//can see things being removed from List

//what they expect
//expects to add and remove tasks
//expects to click things as being completed
