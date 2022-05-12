function createUser(){

    let localtoken = localStorage.getItem("token");
    let token = atob(localtoken);

    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var type = document.getElementById("type").value;
    var password_hash = document.getElementById("passwordhash").value;

      $.ajax({
            url : "http://18.217.208.6:8080/api/v1/user/create",
            type : 'POST',
            crossDomain: true,
            
            dataType: "json",
            data: JSON.stringify({
                email: email,
                name: name,
                phone: phone,
                type: type,
                password_hash: password_hash,
            }),

            headers: {
                "accept": "application/json",
                "token": token,
            },
            success: function (retorno) {
                if(retorno.status == 200){
                    console.log("usuário criado");
                }else{
                    alert("Algo de errado aconteceu, tente novamente.");
                }
                
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert("Ocorreu um erro, tente novamente ou entre em contato com o administrador do sistema");
            }
        })
    };