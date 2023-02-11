$(document).ready(function() {
    $("#form-tarefas").submit(function(e) {
      e.preventDefault();
      var tarefa = $("#tarefa").val();
      $("#lista-tarefas").append("<li>" + tarefa + "</li>");
      $("#tarefa").val("");
    });
  
    $(document).on("click", "li", function() {
      $(this).toggleClass("concluida");
    });
  });
  