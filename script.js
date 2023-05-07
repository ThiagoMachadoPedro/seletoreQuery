$(document).ready(function () {
  $("header button").click(function () {//pega o botao dentro do header e add um evendo a ele, pega o formulario coloca dentro desse evento
$('form').slideDown(); //slidedown desa barra de navegação

  });
$('#botao-cancelar').click(function () {
$('form').slideUp();

});


  $("form").on("submit", function (e) {
    e.preventDefault();

    const enderecoImagem = $("#imagem-nova").val();

    const novoItem = $("<li style='display:none'></li>"); //append inbsere aqui o elemento
    $(`<img src="${enderecoImagem}" />`).appendTo(novoItem); //appento insere o novo elementona teg da lista

    $(`<div class="overlay">
    <a href="${enderecoImagem}" target="_blank"
    title="">
    Ver Imagem Tamanho Real</a>
    </div>`).appendTo(novoItem);
    $(novoItem).appendTo("ul");
    $(novoItem).fadeIn(1000);
    $('#imagem-nova').val('');
  });
});
