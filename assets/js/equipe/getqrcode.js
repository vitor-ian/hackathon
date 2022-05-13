//pega o qrcode da equipe
function getQRCode(){

    let localtoken = localStorage.getItem("token");
    let token = atob(localtoken);

    var equipe_id = document.getElementById("equipe").value;

      $.ajax({
            url : "http://18.217.208.6:8080/api/v1/equipe/get-qrcode",
            type : 'GET',
            crossDomain: true,
            
            dataType: "json",
            data: JSON.stringify({
                equipe_id: equipe_id,
            }),

            headers: {
                "accept": "application/json",
                "token": token,
            },
            success: function (retorno) {
                if(retorno.status == 200){
                    console.log("QR Code inserido");
                    //armazenar qr code em um byte array
                }else{
                    alert("Algo de errado aconteceu, tente novamente.");
                }
                
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert("Ocorreu um erro, tente novamente ou entre em contato com o administrador do sistema");
            }
        })
    };