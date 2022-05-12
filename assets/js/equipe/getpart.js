function getPart(){

    let localtoken = localStorage.getItem("token");
    let token = atob(localtoken);

    var equipe_id = document.getElementById("equipe").value;

      $.ajax({
            url : "http://18.217.208.6:8080/api/v1/equipe/get-participantes" + equipe_id,
            type : 'GET',
            crossDomain: true,

            headers: {
                "token": token,
            },
            success: function (retorno) {
                if(retorno.status == 200){
                    console.log("sucesso: " . retorno.user);
                }else{
                    alert("Algo de errado aconteceu, tente novamente.");
                }
                
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert("Ocorreu um erro, tente novamente ou entre em contato com o administrador do sistema");
            }
        })
    };