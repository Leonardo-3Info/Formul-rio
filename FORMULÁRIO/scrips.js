function send_contact(){
    var calango = document.getElementById('name');
    var surname = document.getElementById('surname');
    var email = document.getElementById('email');
    var message = document.getElementById('message');

    console.log("Nome: " + calango);
    console.log("Sobrenome: " + surname);
    console.log("E-mail: " + email);
    console.log("Mensagem: " + message);

    alert("Obrigado pelo contato, " + calango + "! Sua mensagem foi enviada.");

    document.getElementById('name').value = "";
    document.getElementById('surname').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
}