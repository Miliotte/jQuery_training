$().ready(function(){

    let OnDiv =  $("div");
    let OnParagraph = $("<p>Hello World</p>")

    OnDiv.append(OnParagraph)

    $("<p> Miliotte</p>").prependTo(OnDiv)

   // $("p").html("<b>Negrito</b> 123") Elemento .html é possivel escrever cod
   // $("p").text("<b>Negrito</b> 123") Elemento .text não é possivel escrever cod
});