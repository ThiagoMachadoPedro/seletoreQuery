$(document).ready(function () {});

$("form").on("submit", function (e) {
  e.preventDefault();

  const tarefasR = $("#tarefas").val();

  const novoItem = $("<li></li>");
  $(`<h3 id="taref">${tarefasR}<h3/>`).appendTo(novoItem);

  $(`<div class="container">
  <h3 "${tarefasR}"></h3>
  </div>`).appendTo(novoItem);
  $(novoItem).appendTo("ul");
  $("#tarefas").val("");

  $(novoItem).click(function () {
    $(this).attr("class", "risco");
  });
});
