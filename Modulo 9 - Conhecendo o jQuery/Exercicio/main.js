$(document).ready(function() {
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('line-through');
    });
        
    $('form').on('submit', function(e) {
        e.preventDefault();
        const textoTarefa = $('#nova-tarefa').val();
        const novaTarefa = $('<li style="display: none"></li>');
        $(`<p>${textoTarefa}</p>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $(novaTarefa).fadeIn(1000);
        $('#nova-tarefa').val('');        
    })
})