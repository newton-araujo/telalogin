//Função para realizar cadastro 
function cadastrar() {
    // Obtém os valores dos campos de entrada
    let newName = document.getElementById('cadastrarUsername').value
    let newPassword = document.getElementById('cadastrarPassaword').value
    let status = document.getElementById('statusLogin')

    // Obtém os usuários da base de dados local ou inicializa uma lista vazia
    let users = JSON.parse(localStorage.getItem("users")) || [];
    // Verifica se o usuário já existe na base de dados
    let existingUser = users.find(user => user.username === newName);
    
    if(existingUser) {
        status.innerHTML = 'Usuário já cadastrado!'
    } else {
        // Cria um novo usuário e o adiciona à lista de usuários
        let newUser = {username: newName, password: newPassword}
        users.push(newUser);
        // Atualiza a base de dados local com a nova lista de usuários
        localStorage.setItem("users", JSON.stringify(users))

        // Exibe uma mensagem de sucesso e redireciona após 2 segundos
        status.innerHTML = 'Cadastro realizado com sucesso!'
        status.style.color = 'green'
        setTimeout(()=> window.location.href = "./index.html",2000)
    }

}


//Função para realiar acesso ao sistema
function acessar(){
    // Obtém os valores dos campos de entrada
    let user = document.getElementById('username').value
    let password = document.getElementById('password').value
    let status = document.getElementById('statusLogin')

    // Obtém os usuários da base de dados local ou inicializa uma lista vazia
    var users = JSON.parse(localStorage.getItem("users")) || [];
    // Verifica se o usuário e senha correspondem a um registro na base de dados
    var registre = users.find(u => u.username === user && u.password === password);
    

    if(registre) {
        // Redireciona para a página de boas-vindas com o nome de usuário como parâmetro
        setTimeout(() => window.location.href = `./welcome.html?username=${user}`)
    } else {
        status.innerHTML = "User ou Senha incorretos! Tente novamente!"
    }

}
