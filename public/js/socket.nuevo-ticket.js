var socket = io();
var label = $('#lblNuevoTicket');
socket.on('connect', function() {


})
socket.on('estadoActual', function(resp) {
    label.text(resp.actual);
})

socket.on('disconnect', function() {

})

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});