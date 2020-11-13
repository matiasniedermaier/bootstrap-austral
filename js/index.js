$(function(){
    $("[data-toggle='tooltip']").tooltip();
    $('.carousel').carousel({
        interval: 2000
    });
    $('#contacto').on('show.bs.modal', function(e) {
        console.log('El modal se esta mostrando');
        $('#contactoBtn').removeClass('btn-outline-success');
        $('#contactoBtn').addClass('btn-primary');
        $('#contactoBtn').prop('disabled', true);
    });
    $('#contacto').on('shown.bs.modal', function(e) {
        console.log('El modal se mostró');
    });
    $('#contacto').on('hide.bs.modal', function(e) {
        console.log('El modal se esta cerrando');
        $('#contactoBtn').removeClass('btn-primary');
        $('#contactoBtn').addClass('btn-outline-success');
        $('#contactoBtn').prop('disabled', false);
    });
    $('#contacto').on('hidden.bs.modal', function(e) {
        console.log('El modal se cerró');
    });
})