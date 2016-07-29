$(document).ready(function() {
    $(".action-add").click(function() {
        //$(".main-list").append("<li>" + $(".item-input").val() + " <button type='button' class='action-delete'>Delete</button></li>");
		$('#table-body').append('<tr><td height="50px" width="300px" class="prvitd">' + $(".item-input").val() + ' </td><td height="50px" width="50px"> <button type="button" class="action-check">Done </button> </td> <td height="50px" width="50px"> <button type="button" class="action-delete">Delete</button> </td> <td height="50px" width="50px"> <button type="button" class="action-edit">Edit </button> </td></tr>');
        $(".item-input").val("");
    });
    
   
    $("#table-body").on("click", ".action-delete", function(){
        $(this).parent().parent() .remove();
		});
		
		
		$("#table-body").on("click", ".action-check", function(){
        $(this).parent().parent() .find(".prvitd") .css({"background-color": "green"});
		});
		
		
		$("#table-body").on("click", ".action-edit", function(){
        $(this).parent().parent() ;
		});
		
	});
