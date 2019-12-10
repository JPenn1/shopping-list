
 $("ul").on("click", ".shopping-item-delete",function (e) {
  $(e.target).closest("li").remove();
}); 

$("ul").on("click", ".shopping-item-toggle", function(e){
$(this).parent().parent().find(".shopping-item").toggleClass("shopping-item__checked");
});

$("#js-shopping-list-form").on('submit',function(e){
     

const newItem = $("#shopping-list-entry").val();
$(".shopping-list").append(`<li>
  <span class="shopping-item">${newItem}</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label" >check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>
</li>`);
 e.preventDefault();
$("#shopping-list-entry").val();
$("#shopping-list-entry").val("");


  

});




    


    
  

