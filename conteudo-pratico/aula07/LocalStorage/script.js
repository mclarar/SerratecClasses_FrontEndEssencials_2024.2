document.getElementById('saveButton').addEventListener('click', function () {
    const name = document.getElementById('username').value;

    localStorage.setItem('username', name);
    alert('Salvo com sucesso');
    
});

document.getElementById('getButton').addEventListener('click', function(){
    const nomeSalvo = localStorage.getItem('username');

    document.getElementById('displayName').textContent = `Username: ${nomeSalvo}`
});

localStorage.clear();