//cria uma equipe
function createEquipe(){

    let localtoken = localStorage.getItem("token");
    let token = atob(localtoken);

    var name = document.getElementById("name-equipe").value;

      $.ajax({
            url : "http://18.217.208.6:8080/api/v1/equipe/create",
            type : 'POST',
            crossDomain: true,
            
            dataType: "json",
            data: JSON.stringify({
                name: name,
            }),

            headers: {
                "accept": "application/json",
                "token": token,
            },
            success: function (retorno) {
                if(retorno.status == 200){
                    console.log("equipe criada");
                }else{
                    alert("Algo de errado aconteceu, tente novamente.");
                }
                
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert("Ocorreu um erro, tente novamente ou entre em contato com o administrador do sistema");
            }
        })
    };