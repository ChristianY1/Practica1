function buscarPeliculaPorTitulo(){
  
    var titulo = document.getElementById("titulo").value
    
        
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
                //console.log(datdata.Search.movie);
                var vector = []
                data.Search.forEach(movie => {
                vector.push ([movie.Poster,movie.Title,movie.Year,movie.Type,movie.imdbID])                       
                    
                });
                console.log(vector)
                console.log(vector.length)
                for (var i = 0; i < 5; i++) {
                    detalles +="<td>" + 
                    "<tr><img src= "+ vector[i][0] + " width=150  ></tr>" + 
                    "<tr>" + vector[i][1] + "</tr>" + 
                    "<tr>" + vector[i][2] + "</tr>" +
                    "<tr>" + vector[i][3] + "</tr>"+
                    "<tr>"+ "<input type = button onclick =\" buscarPeliculaPorID('"+ vector[i][4]+"')\" value = ver mas >" +"</tr>"
                    "<td>"+"<br>";
                   
                    
                }
                
                       
                   
                
                document.getElementById("detalles").innerHTML = " ";
                document.getElementById("informacion").innerHTML = detalles;
            }
        };
        
        xmlhttp.open("GET","http://www.omdbapi.com/?i=tt3896198&apikey=d358b412&s="+ titulo + "&plot=full",true);
        xmlhttp.send();
       
        
    }
}



function buscarPeliculaPorID(id){
    //var idPelicula = document.getElementById("id").value;
    var idPelicula = id;
    var detalles2 = "";
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        
    }
    xmlhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText)
            console.log(data);
            detalles2 =  "<tr><img src= "+ data.Poster + " width=150  ></tr>"
                         +"<b>"+"Genero:&nbsp&nbsp" + "</b>" + data.Genre + "<br>"
                         +  "<b>"+ "Publicada:&nbsp"+ "</b>"  + data.Released + "<br>"
                         +  "<b>"+ "Valoracion:&nbsp"+ "</b>" + data.Rated + "<br>"
                         +  "<b>"+ "IMDB:&nbsp"+ "</b>" + data.imdbRating + "<br>"
                         +  "<b>"+ "Dirigida por:&nbsp"+ "</b>" + data.Director+ "<br>"
                         +  "<b>"+ "Escrita por:&nbsp"+ "</b>" + data.Writer+ "<br>"
                         +  "<b>"+ "Actores:&nbsp"+ "</b>" + data.Actors+ "<br>"
                         +  "<b>"+ "Sinopsis:&nbsp"+ "</b>" + data.Plot+ "<br>"
                         
            console.log(detalles2);
                
           
            
            document.getElementById("detalles").innerHTML = " ";
            document.getElementById("detalles").innerHTML = detalles2;
        }
    };
    
    xmlhttp.open("GET","http://www.omdbapi.com/?i="+idPelicula+"&apikey=d358b412",true);
    xmlhttp.send();
  
}

function buscarPeliculaPorID2(){
    var idPelicula = document.getElementById("idd").value;
    var detalles2 = "";
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        
    }
    xmlhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText)
            console.log(data);
            detalles2 =  "<tr><img src= "+ data.Poster + " width=150  ></tr>"+ "<br>"
                         +"<b>"+"Titulo:&nbsp&nbsp" + "</b>" + data.Title + "<br>"
                         + "<b>"+"Tipo:&nbsp&nbsp" + "</b>" + data.Type + "<br>"
                         + "<b>"+"Genero:&nbsp&nbsp" + "</b>" + data.Genre + "<br>"
                         +  "<b>"+ "Publicada:&nbsp"+ "</b>"  + data.Released + "<br>"
                         +  "<b>"+ "Valoracion:&nbsp"+ "</b>" + data.Rated + "<br>"
                         +  "<b>"+ "IMDB:&nbsp"+ "</b>" + data.imdbRating + "<br>"
                         +  "<b>"+ "Dirigida por:&nbsp"+ "</b>" + data.Director+ "<br>"
                         +  "<b>"+ "Escrita por:&nbsp"+ "</b>" + data.Writer+ "<br>"
                         +  "<b>"+ "Actores:&nbsp"+ "</b>" + data.Actors+ "<br>"
                         +  "<b>"+ "Sinopsis:&nbsp"+ "</b>" + data.Plot+ "<br>"
                         
            console.log(detalles2);
            
           
            document.getElementById("informacion").innerHTML = " ";
            document.getElementById("detalles").innerHTML = " ";
            document.getElementById("detalles").innerHTML = detalles2;
        }
    };
    
    xmlhttp.open("GET","http://www.omdbapi.com/?i="+idPelicula+"&apikey=d358b412",true);
    xmlhttp.send();
  
}

function segundaParte(){
  
    var titulo = document.getElementById("titulo").value
    
        
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
                //console.log(datdata.Search.movie);
                var vector = []
                data.Search.forEach(movie => {
                vector.push ([movie.Poster,movie.Title,movie.Year,movie.Type,movie.imdbID])                       
                    
                });
                console.log(vector)
                console.log(vector.length)
                for (var i = 5; i < vector.length; i++) {
                    detalles +="<td>" + 
                    "<tr><img src= "+ vector[i][0] + " width=150  ></tr>" + 
                    "<tr>" + vector[i][1] + "</tr>" + 
                    "<tr>" + vector[i][2] + "</tr>" +
                    "<tr>" + vector[i][3] + "</tr>"+
                    "<tr>"+ "<input type = button onclick =\" buscarPeliculaPorID('"+ vector[i][4]+"')\" value = ver mas >" +"</tr>"
                    "<td>"+"<br>";
                   
                    
                }
                
                       
                   
                
                document.getElementById("detalles").innerHTML = " ";
                document.getElementById("informacion").innerHTML = detalles;
            }
        };
        
        xmlhttp.open("GET","http://www.omdbapi.com/?i=tt3896198&apikey=d358b412&s="+ titulo + "&plot=full",true);
        xmlhttp.send();
       
        
    }
}


