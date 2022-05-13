//deleta um grupo de usuário de uma equipe
function drainUser(){

    let localtoken = localStorage.getItem("token");
    let token = atob(localtoken);

    var users = document.querySelectorAll('input[type=checkbox]:checked').value;
    var equipe_id = document.getElementById("equipe").value;

      $.ajax({
            url : "http://18.217.208.6:8080/api/v1/equipe/drain",
            type : 'DELETE',
            crossDomain: true,
            
            dataType: "json",
            data: JSON.stringify({
                users: users,
                equipe_id: equipe_id,
            }),

            headers: {
                "accept": "application/json",
                "token": token,
            },
            success: function (retorno) {
                if(retorno.status == 200){
                    console.log("usuário apagado");
                }else{
                    alert("Algo de errado aconteceu, tente novamente.");
                }
                
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert("Ocorreu um erro, tente novamente ou entre em contato com o administrador do sistema");
            }
        })
    };