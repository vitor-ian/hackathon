function searchEquipe(){
    var localtoken = localStorage.getItem("token");
    var token = atob(localtoken);

    var text = document.getElementById('search').value;
    var search = text.toLowerCase();

    var equipes = [];

    $.ajax({
        url : "https://18.217.208.6:4443/api/v1/equipe/get-all",
        type : 'GET',
        crossDomain: true,
        
        dataType: "json",

        headers: {
            "token": token,
        },
        success: function (retorno) {
            if(retorno.status == 200){
                $(retorno.equipes).each(function(chave, valor){
                    equipes.push(valor.name.toLowerCase(), valor.id);
                });
                var pesquisa = equipes.indexOf(search); 

                if(pesquisa != "-1"){
                    var num = pesquisa + 1;
                    var id = btoa(equipes[num]);

                    localStorage.setItem("equipe", id);
                    window.location.href = "/admin/equipe.html"; 
                }else{
                    alert("Não encontrado");
                }
            }else{
                alert("Algo de errado aconteceu, tente novamente.");
            }
            
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert("Ocorreu um erro, tente novamente ou entre em contato com o administrador do sistema");
        }
    })

    
}
