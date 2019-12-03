function info_usuarios (){
    var id = document.getElementById("id_usuario").value;
    console.log ("Digite o id do usuário")
    var URL = "https://jsonplaceholder.typicode.com/users/"+id;
    console.log("Montei a URL");
    console.log(URL);

    fetch(URL, { method:"GET" })
       .then(response => response.json() )
       .then(json => preencheHTML(json));

}
function preencheHTML(json){
    var result = document.getElementById("result");
    result.innerHTML  = "Name = "+json.name + "<br/>";
    result.innerHTML += "Username = "+json.username + "<br/>";
    result.innerHTML += "Email = "+json.email + "<br/>";
    result.innerHTML += "Phone = " +json.phone + "<br/>";
    result.innerHTML += "website = " +json.website + "<br/>";

 }