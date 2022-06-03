//Retorna Array de todos as tarefas
var localtoken = localStorage.getItem("token");
var token = atob(localtoken);

      $.ajax({
            url : "https://18.217.208.6:4443/api/v1/bases/get-all",
            type : 'GET',
            crossDomain: true,

            headers: {
                "token": token,
            },
            success: function (retorno) {
                if(retorno.status == 200){
                    $(retorno.bases).each(function(chave, valor){
                        $("<option value='" + valor.id +"'>" + valor.name +"</option>").appendTo("#tarefas");
                    });
                }else{
                    alert("Algo de errado aconteceu, tente novamente.");
                }
                
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert("Ocorreu um erro, tente novamente ou entre em contato com o administrador do sistema");
            }
        })