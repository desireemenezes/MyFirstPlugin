/** Escopo -> dado uma função executavel **/
(function( $ ) {
    $.fn.changeColors = function() {
        // referencia o objeto selecionado
        $(this).on('keyup', function() {
            (this.value.length) ? $(this).css("background-color","#FFFFCC") : $(this).css("background-color","#FFF");
        })
        return this;
    } 
})( jQuery )

$('#my_input').changeColors();
