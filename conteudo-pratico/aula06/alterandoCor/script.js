document.getElementById('changeColorBtn').addEventListener('click', function(){
    let randomColor = '#' + Math.floor(Math.random()*1677215).toString(16);

    document.body.style.backgroundColor = randomColor;
})
