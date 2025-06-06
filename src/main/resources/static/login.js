
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        const authFeedback = document.getElementById('auth-feedback');

        function toggleForms() {
            loginForm.classList.toggle('hidden');
            registerForm.classList.toggle('hidden');
            authFeedback.textContent = ''; // Limpa mensagens de feedback ao trocar de formulário
        }
        const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
            if (usuario && usuario.email) {
            document.getElementById("boas-vindas").textContent = `Olá, ${usuario.email}`;
        }
        function logout() {
           localStorage.removeItem("usuarioLogado");
            window.location.href = "login.html";
        }
        function handleLogin(event) {
            event.preventDefault(); // Impede o envio padrão do formulário
            const email = document.getElementById('login-email').value;
            const senha = document.getElementById('login-senha').value;

            // Lógica de validação de login (Front-end básico)
            if (!email || !senha) {
                setFeedback('Por favor, preencha todos os campos.', 'error');
                return;
            }
            
            // Simulação de chamada ao backend
            console.log('Tentativa de Login:', { email, senha });
            setFeedback('Processando login...', 'info');
            fetch('http://localhost:48780/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, senha })
        })
        .then(response => response.json())
        .then(data => {
            if (data && data.id) {
                setFeedback('Login bem-sucedido! Redirecionando...', 'success');
                window.location.href = 'novo quiz.html';
            } else {
                setFeedback('Email ou senha inválidos.', 'error');
            }
        })
.catch(error => {
    console.error('Erro no login:', error);
    setFeedback('Erro ao tentar fazer login.', 'error');
});
            
            // AQUI VOCÊ FARIA A CHAMADA PARA O SEU BACKEND (Ex: com fetch API)
            // Exemplo: fetch('/api/login', { method: 'POST', body: JSON.stringify({email, senha}), headers: {'Content-Type': 'application/json'} })
            // .then(response => response.json())
            // .then(data => {
            //     if(data.success) {
            //         setFeedback('Login bem-sucedido! Redirecionando...', 'success');
            //         // window.location.href = 'caminho/para/o/quiz.html'; // Redireciona para o quiz
            //     } else {
            //         setFeedback(data.message || 'Email ou senha inválidos.', 'error');
            //     }
            // })
            // .catch(error => {
            //     console.error('Erro no login:', error);
            //     setFeedback('Erro ao tentar fazer login. Tente novamente.', 'error');
            // });

            // Simulação para demonstração (REMOVER EM PRODUÇÃO)
            setTimeout(() => {
                 if (email === "teste@teste.com" && senha === "123") {
                     setFeedback('Login bem-sucedido! Redirecionando...', 'success');
                     // Idealmente, redirecionar para a página do quiz:
                     window.location.href = 'novo quiz.html'; // Ou o nome do seu arquivo principal do quiz
                     alert('Login simulado com sucesso! Você seria redirecionado para o quiz.');
                 } else {
                     setFeedback('Email ou senha inválidos (simulação).', 'error');
                 }
            }, 1000);
        }

        function handleRegister(event) {
            event.preventDefault();
            const nome = document.getElementById('register-nome').value;
            const email = document.getElementById('register-email').value;
            const senha = document.getElementById('register-senha').value;
            const confirmarSenha = document.getElementById('register-confirmar-senha').value;

            // Lógica de validação de cadastro (Front-end básico)
            if (!nome || !email || !senha || !confirmarSenha) {
                setFeedback('Por favor, preencha todos os campos.', 'error');
                return;
            }
            if (senha !== confirmarSenha) {
                setFeedback('As senhas não coincidem.', 'error');
                return;
            }
            if (senha.length < 6) {
                setFeedback('A senha deve ter pelo menos 6 caracteres.', 'error');
                return;
            }

            // Simulação de chamada ao backend
            console.log('Tentativa de Cadastro:', { nome, email, senha });
            setFeedback('Processando cadastro...', 'info');

            // AQUI VOCÊ FARIA A CHAMADA PARA O SEU BACKEND (Ex: com fetch API para registrar no MongoDB)
            // Exemplo: fetch('/api/register', { method: 'POST', body: JSON.stringify({nome, email, senha}), headers: {'Content-Type': 'application/json'} })
            // .then(response => response.json())
            // .then(data => {
            //     if(data.success) {
            //         setFeedback('Cadastro realizado com sucesso! Faça o login.', 'success');
            //         toggleForms(); // Volta para o formulário de login
            //     } else {
            //         setFeedback(data.message || 'Erro ao cadastrar. Tente novamente.', 'error');
            //     }
            // })
            // .catch(error => {
            //     console.error('Erro no cadastro:', error);
            //     setFeedback('Erro ao tentar cadastrar. Tente novamente.', 'error');
            // });
            
            // Simulação para demonstração (REMOVER EM PRODUÇÃO)
             setTimeout(() => {
                setFeedback('Cadastro simulado com sucesso! Faça o login.', 'success');
                toggleForms(); // Volta para o formulário de login
            }, 1000);
        }

        function setFeedback(message, type) {
            authFeedback.textContent = message;
            authFeedback.className = 'mt-4 text-sm'; // Reset classes
            if (type === 'success') {
                authFeedback.classList.add('text-green-600');
            } else if (type === 'error') {
                authFeedback.classList.add('text-red-600');
            } else if (type === 'info') {
                authFeedback.classList.add('text-blue-600');
            }
        }
