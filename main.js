/* Mobile Navigation Toggle */
jQuery(document).ready(function () {
  jQuery(".menu-trigger").click(function () {
    jQuery("nav").slideToggle(400, function () {
      jQuery(this).toggleClass("nav-expanded").css('display', '');
    });
  });    
    
/* Toggle Health Buttons */
jQuery(".toggle_btn").click(function(){
    jQuery(".toggle_btn").removeClass('active');
        jQuery(this).toggleClass('active'); 
    });  
    
    jQuery(".toggle_btn_b").click(function(){
        jQuery(".toggle_btn_b").removeClass('active');
            jQuery(this).toggleClass('active'); 
    });  
    
    jQuery(".toggle_btn_c").click(function(){
        jQuery(".toggle_btn_c").removeClass('active');
            jQuery(this).toggleClass('active'); 
    });  
    
    jQuery(".toggle_btn_d").click(function(){
        jQuery(".toggle_btn_d").removeClass('active');
            jQuery(this).toggleClass('active'); 
    });  
    
  });



