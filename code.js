function buscarPeliculaPorTitulo(){
    var titulo = document.getElementById("titulo").value;
    var detalles = "";
    if(titulo == ""){
        detalles = "<tr>" + 
        "<td colspan = '5'> "+"Sin información disponible.."+"</td>"+
        "</tr>";
        document.getElementById("informacion").innerHTML = detalles;
    }else{
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            
        }
        xmlhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.responseText)
                //console.log(data);
                data.Search.forEach(movie => {
                    detalles +="<td>" + 
                                        "<tr><img src= "+ movie.Poster + "></tr>" + "<br>"+
                                        "<tr>" + movie.Title + "</tr>" + 
                                        "<tr>" + movie.Year + "</tr>" +
                                        "<tr>" + movie.Type + "</tr>"+
                                        "<tr>"+ "<input type = button onclick =\" buscarPeliculaPorID('"+ movie.imdbID +"')\" value = ver mas >" +"</tr>"
                                        
                               " <td>";
                    
                });
                
               
                document.getElementById("informacion").innerHTML = detalles;
            }
        };
        
        xmlhttp.open("GET","http://www.omdbapi.com/?i=tt3896198&apikey=d358b412&s="+ titulo + "&plot=full",true);
        xmlhttp.send();
       
        
    }
}
function buscarPeliculaPorID(id){
    var idPelicula = id;
    var detalles2 = "";


    

    //var idPelicula = document.getElementById("id").value;
    //xmlhttp.open("GET","http://www.omdbapi.com/?i="+idPelicula+"&apikey=d358b412",true);
    //xmlhttp.send();
}
