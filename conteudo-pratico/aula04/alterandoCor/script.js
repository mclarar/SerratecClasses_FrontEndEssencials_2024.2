document.getElementById('chancheColor').addEventListener('click', function() {
    let corRandomizada = "#" + Math.floor(Math.random()*1677215).toString(16); 
  
    document.body.style.backgroundColor = corRandomizada;
    
});