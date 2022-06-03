//login
function login(){

    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;

      $.ajax({
            url : "https://18.217.208.6:4443/api/v1/user/login",
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
                    let equipe = btoa(retorno.equipe_id);
                    localStorage.setItem("token", token);
                    localStorage.setItem("equipe", equipe);

                    if(retorno.user.type == "admin"){
                        window.location.href = "/admin/ranking.html"; 
                    }
                    else if(retorno.user.type == "part"){
                        window.location.href = "/participante/tarefas.html"; 
                    }
                    
                }
                
            },
            error: function (xhr, ajaxOptions, thrownError) {
                if(xhr.status == 401){
                    $('#alertas').html("<div class='alert alert-danger alert-dismissible fade show'>Usuário ou senha incorretos.<button type='button' class='btn-close' data-bs-dismiss='alert'></button></div>"); 
                    timeOut();
                }else{
                    $('#alertas').html("<div class='alert alert-danger alert-dismissible fade show'>Ocorreu um erro, entre em contato com o administrador.<button type='button' class='btn-close' data-bs-dismiss='alert'></button></div>"); 
                    timeOut();
                }
            }
        })
    };

    function timeOut(){
        setTimeout(function(){
            $(".alert").fadeOut("slow", function(){
                $(this).alert("close");
            })
            
        }, 6000);
    }