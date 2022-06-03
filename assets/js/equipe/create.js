//cria uma equipe
function createEquipe(){

    var localtoken = localStorage.getItem("token");
    var token = atob(localtoken);

    var name = document.getElementById("equipe").value;

      $.ajax({
            url : "https://18.217.208.6:4443/api/v1/equipe/create",
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
                    window.location.href = "/admin/settings.html"; 
                }else{
                    alert("Algo de errado aconteceu, tente novamente.");
                }
                
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert("Ocorreu um erro, tente novamente ou entre em contato com o administrador do sistema");
            }
        })
    };