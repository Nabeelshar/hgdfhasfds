jQuery('document').ready(function(){

   jQuery('#cashcred_stripe_payment_mode').change(function() {
        var selected_val = jQuery(this).val();
        cachcred_check_payment_mode(selected_val);

   });


    function cachcred_check_payment_mode(selected_val){

            if ('sandbox' == selected_val) {

                jQuery('.cashcred_test_creds').show();
                jQuery('.cashcred_live_creds').hide();
            }

            if ('live' == selected_val) {

                jQuery('.cashcred_test_creds').hide();
                jQuery('.cashcred_live_creds').show();
            }
    }

    cachcred_check_payment_mode(jQuery('#cashcred_stripe_payment_mode').val());


    jQuery('.redirect_url').click(function() {
        jQuery(this).focus();
        jQuery(this).select();
        document.execCommand('copy');
    });

});