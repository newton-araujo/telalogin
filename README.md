<h1>Sistema de Cadastro e Acesso.</h1>

Este é um simples sistema de cadastro e acesso usando HTML, JavaScript e armazenamento local (localStorage). Abaixo estão as funções principais responsáveis pelo cadastro e acesso.

<h2>Cadastro</h2>
<h3>Função "cadastrar()"</h3>
A função cadastrar() é responsável por coletar os dados de um novo usuário (nome de usuário e senha) a partir de elementos HTML, verificar se o usuário já existe na base de dados local e, em seguida, realizar o cadastro se o usuário for novo.

    function cadastrar() {
    // Obtém os valores dos campos de entrada
    let newName = document.getElementById('cadastrarUsername').value;
    let newPassword = document.getElementById('cadastrarPassaword').value;
    let status = document.getElementById('statusLogin');

    // Obtém os usuários da base de dados local ou inicializa uma lista vazia
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Verifica se o usuário já existe na base de dados
    let existingUser = users.find(user => user.username === newName);
    
    if(existingUser) {
        status.innerHTML = 'Usuário já cadastrado!';
    } else {
        // Cria um novo usuário e o adiciona à lista de usuários
        let newUser = {username: newName, password: newPassword};
        users.push(newUser);

        // Atualiza a base de dados local com a nova lista de usuários
        localStorage.setItem("users", JSON.stringify(users));

        // Exibe uma mensagem de sucesso e redireciona após 2 segundos
        status.innerHTML = 'Cadastro realizado com sucesso!';
        status.style.color = 'green';
        setTimeout(() => window.location.href = "./index.html", 2000);
    }
}

<h2>Acesso</h2>
<h3>Função "acessar()"</h3>
A função acessar() verifica se o nome de usuário e senha fornecidos correspondem a algum usuário na base de dados local. Se houver correspondência, o usuário é redirecionado para uma página de boas-vindas.

    function acessar() {
    // Obtém os valores dos campos de entrada
    let user = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let status = document.getElementById('statusLogin');

    // Obtém os usuários da base de dados local ou inicializa uma lista vazia
    var users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Verifica se o usuário e senha correspondem a um registro na base de dados
    var registre = users.find(u => u.username === user && u.password === password);
    
    if(registre) {
        // Redireciona para a página de boas-vindas com o nome de usuário como parâmetro
        setTimeout(() => window.location.href = `./welcome.html?username=${user}`);
    } else {
        // Exibe uma mensagem de erro se o usuário ou senha estiverem incorretos
        status.innerHTML = "Usuário ou Senha incorretos! Tente novamente!";
    }
}


<h3>LINK PARA TESTE:</h3>