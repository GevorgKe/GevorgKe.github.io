$( function() {
        
    $( "#tabs" ).tabs({
      event: "mouseover"
    });
    
 
    var myDiv = $( ".top");
    myDiv.hide(3000).show(3000);
    
 });