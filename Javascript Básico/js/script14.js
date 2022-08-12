var nam =["Daniel","Lara","Silvia","Claudio","Marcio"];

/*for(var i=0; i < nam.length; i++){
    console.log(nam[i]);
}*/

for (var i in nam){
    console.log(i);
}

for(var i of nam){
    console.log(i);
}