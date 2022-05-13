//Retorna valores de um usuario
function getUser(){

    let localtoken = localStorage.getItem("token");
    let token = atob(localtoken);

    var id = document.getElementById("id-user").value;

      $.ajax({
            url : "http://18.217.208.6:8080/api/v1/user/get?" + id,
            type : 'GET',
            crossDomain: true,
            
            headers: {
                "token": token,
            },

            success: function (retorno) {
                if(retorno.status == 200){
                    let user = retorno.user;
                    console.log(user);
                }else{
                    alert("Algo de errado aconteceu, tente novamente.");
                }
                
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert("Ocorreu um erro, tente novamente ou entre em contato com o administrador do sistema");
            }
        })
    };