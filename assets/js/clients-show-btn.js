$('.hidden').removeClass('hidden').hide();
$('.btn-clients').click(function() {
    $(this).find('span').each(function() { $(this).toggle(); });
    $("#client-group-two").toggle();
});
