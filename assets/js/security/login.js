function login(){

    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;

      $.ajax({
            url : "http://18.217.208.6:8080/api/v1/user/login",
            type : 'POST',
            crossDomain: true,
            
            dataType: "json",
            data: JSON.stringify({"username": username, "password": password}),

            headers: {
                "accept": "application/json",
            },
            success: function (retorno) {
                if(retorno.status == 200){
                    let token = btoa(retorno.token);
                    localStorage.setItem("token", token);

                    if(retorno.type == "admin"){
                        window.location.href = "/admin/ranking.html"; 
                    }
                    else if(retorno.type == "part"){
                        window.location.href = "/participante/tarefas.html"; 
                    }
                    
                }else{
                    alert("Usuario ou senha incorretos!");
                }
                
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert("Ocorreu um erro, tente novamente ou entre em contato com o administrador do sistema");
            }
        })
    };