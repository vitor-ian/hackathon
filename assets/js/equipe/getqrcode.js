//pega o qrcode da equipe
var localtoken = localStorage.getItem("token");
var token = atob(localtoken);

var equipe = localStorage.getItem("equipe");
var id = atob(equipe);

$.ajax({
    url : "https://18.217.208.6:4443/api/v1/equipe/get-qrcode?equipe_id=" + id,
    type : 'GET',
    crossDomain: true,
    
    dataType: "json",

    headers: {
        "token": token,
    },
    success: function (retorno) {
        if(retorno.status == 200){
            let qrcode = retorno.base;
            $('#qrcode').html("<img src='" + qrcode + "' alt='qr code'>"); 
        }else{
            alert("Algo de errado aconteceu, tente novamente.");
        }
        
    },
    error: function (xhr, ajaxOptions, thrownError) {
        alert("Ocorreu um erro, tente novamente ou entre em contato com o administrador do sistema");
    }
})