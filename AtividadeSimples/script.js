// script.js

document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Limpar mensagens de erro
    let isValid = true;
    let errorMessages = document.querySelectorAll(".error");
    errorMessages.forEach(function(error) {
        error.style.display = "none";
    });

    // Validar Nome
    let nome = document.getElementById("nome").value.trim();
    if (nome === "") {
        document.getElementById("nomeError").textContent = "O nome é obrigatório!";
        document.getElementById("nomeError").style.display = "block";
        isValid = false;
    }

    // Validar E-mail
    let email = document.getElementById("email").value.trim();
    if (!email.includes("@") || email === "") {
        document.getElementById("emailError").textContent = "E-mail inválido!";
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    }

    // Validar Senha
    let senha = document.getElementById("senha").value;
    if (senha.length < 8 || !/\d/.test(senha) || !/[a-zA-Z]/.test(senha)) {
        document.getElementById("senhaError").textContent = "A senha deve ter pelo menos 8 caracteres, incluindo letras e números.";
        document.getElementById("senhaError").style.display = "block";
        isValid = false;
    }

    // Validar Confirmação de Senha
    let confirmarSenha = document.getElementById("confirmarSenha").value;
    if (senha !== confirmarSenha) {
        document.getElementById("confirmarSenhaError").textContent = "As senhas não coincidem!";
        document.getElementById("confirmarSenhaError").style.display = "block";
        isValid = false;
    }

    // Validar Data de Nascimento (mínimo de 18 anos)
    let dataNascimento = new Date(document.getElementById("dataNascimento").value);
    let idade = new Date().getFullYear() - dataNascimento.getFullYear();
    if (idade < 18) {
        document.getElementById("dataNascimentoError").textContent = "Você precisa ter no mínimo 18 anos.";
        document.getElementById("dataNascimentoError").style.display = "block";
        isValid = false;
    }

    // Validar Aceite dos Termos
    let termos = document.getElementById("termos").checked;
    if (!termos) {
        document.getElementById("termosError").textContent = "Você deve aceitar os termos de uso.";
        document.getElementById("termosError").style.display = "block";
        isValid = false;
    }

    // Se todos os campos estiverem válidos, enviar o formulário
    if (isValid) {
        alert("Cadastro realizado com sucesso!");
        // Aqui você pode enviar os dados para o servidor, se necessário.
    }
});
