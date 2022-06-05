//pega o nome, pontos e participantes da equipe
var localtoken = localStorage.getItem("token");
var token = atob(localtoken);

var equipe = localStorage.getItem("equipe");
var id = atob(equipe);

$.ajax({
    url : "https://18.217.208.6:4443/api/v1/equipe/get?id=" + id,
    type : 'GET',
    crossDomain: true,
    
    dataType: "json",

    headers: {
        "token": token,
    },
    success: function (retorno) {
        $('.participantes').html("");
        if(retorno.status == 200){
            var nome = retorno.equipes.name;
            var pontos = retorno.equipes.pontos;

            $('#name-equipe').html("Equipe " + nome); 
            $('#pontos-equipe').html(pontos); 

            $(retorno.equipes.participantes).each(function(chave, valor){
                var phone = ""
                if(valor.phone != ""){
                    phone = "<a target='_blank' href='https://api.whatsapp.com/send?phone=55"+valor.phone+"'><i class='uil uil-whatsapp'></i></a>";
                }
                var participante = "<li class='m-8'>"+ valor.name +" (<small><em>"+valor.observacoes+")</em></small>  "+phone+"</li>"
                $(participante).appendTo(".participantes");
            });
        }else{
            alert("Algo de errado aconteceu, tente novamente.");
        }
        
    },
    error: function (xhr, ajaxOptions, thrownError) {
        alert("Ocorreu um erro, tente novamente ou entre em contato com o administrador do sistema");
    }
})