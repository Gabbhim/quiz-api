
        // Array com perguntas e respostas (1000 perguntas no total)
        const quizData = [
            // Nível 1: Gênesis
            {
                level: 1,
                questions: [
                    {
                        question: "No início, quem criou os céus e a terra?",
                        options: ["Abraão", "Moisés", "Deus", "Adão"],
                        correctAnswer: "Deus",
                    },
                    {
                        question: "Qual árvore foi proibida para Adão e Eva no Jardim do Éden?",
                        options: ["Árvore da Vida", "Árvore do Conhecimento do Bem e do Mal", "Árvore de Frutas", "Árvore da Sabedoria"],
                        correctAnswer: "Árvore do Conhecimento do Bem e do Mal",
                    },
                    {
                        question: "Quem foi o primeiro homem a nascer?",
                        options: ["Adão", "Caim", "Abel", "Sete"],
                        correctAnswer: "Caim",
                    },
                    {
                        question: "Qual foi o sinal da aliança de Deus com Noé?",
                        options: ["Arco-íris", "Circuncisão", "Sábado", "Maná"],
                        correctAnswer: "Arco-íris",
                    },
                    {
                        question: "Quantos dias e noites choveu durante o dilúvio?",
                        options: ["7", "40", "100", "365"],
                        correctAnswer: "40",
                    },
                    {
                        question: "Qual filho de Noé viu sua nudez e contou aos irmãos?",
                        options: ["Sem", "Cam", "Jafé", "Matusalém"],
                        correctAnswer: "Cam",
                    },
                    {
                        question: "Qual cidade foi construída por Ninrode?",
                        options: ["Ur", "Babel", "Nínive", "Jerusalém"],
                        correctAnswer: "Babel",
                    },
                    {
                        question: "Quem foi o pai de Sarai (Sara) e Abrão (Abraão)?",
                        options: ["Noé", "Terá", "Sem", "Cam"],
                        correctAnswer: "Terá",
                    },
                    {
                        question: "Qual era o nome da terra para onde Deus chamou Abrão?",
                        options: ["Canaã", "Egito", "Babilônia", "Assíria"],
                        correctAnswer: "Canaã",
                    },
                    {
                        question: "Quem era o rei de Salém e sacerdote do Deus Altíssimo?",
                        options: ["Davi", "Melquisedeque", "Faraó", "Saul"],
                        correctAnswer: "Melquisedeque",
                    },
                ],
            },
            // Nível 2: Êxodo
            {
                level: 2,
                questions: [
                  {
                    question: "Quem liderou os israelitas para fora do Egito?",
                    options: ["Josué", "Moisés", "Arão", "Davi"],
                    correctAnswer: "Moisés",
                  },
                  {
                    question: "Qual praga transformou a água do rio Nilo em sangue?",
                    options: ["Rãs", "Piolhos", "Sangue", "Moscas"],
                    correctAnswer: "Sangue",
                  },
                  {
                    question: "Quantos mandamentos Deus deu a Moisés no Monte Sinai?",
                    options: ["5", "10", "12", "613"],
                    correctAnswer: "10",
                  },
                  {
                    question: "Qual era o nome da celebração que comemora a saída do Egito?",
                    options: ["Páscoa", "Pentecostes", "Tabernáculos", "Hanukkah"],
                    correctAnswer: "Páscoa",
                  },
                  {
                    question: "Onde os israelitas vagaram por 40 anos?",
                    options: ["Deserto do Sinai", "Deserto do Saara", "Deserto de Neguev", "Deserto de Mojave"],
                    correctAnswer: "Deserto do Sinai",
                  },
                  {
                    question: "Qual era o nome do irmão de Moisés que o ajudou a falar com Faraó?",
                    options: ["Josué", "Arão", "Miriã", "Eleazar"],
                    correctAnswer: "Arão",
                  },
                  {
                    question: "Qual era o alimento que Deus fornecia aos israelitas no deserto?",
                    options: ["Maná", "Pão", "Frutas", "Carne"],
                    correctAnswer: "Maná",
                  },
                  {
                    question: "Qual animal foi usado para o sacrifício da Páscoa?",
                    options: ["Vaca", "Cabra", "Ovelha", "Pombo"],
                    correctAnswer: "Ovelha",
                  },
                  {
                    question: "Qual mar os israelitas atravessaram para escapar do Egito?",
                    options: ["Mar Vermelho", "Mar Morto", "Mar da Galileia", "Mar Mediterrâneo"],
                    correctAnswer: "Mar Vermelho",
                  },
                  {
                    question: "Qual montanha Moisés subiu para receber os mandamentos?",
                    options: ["Monte Sinai", "Monte Moriá", "Monte Everest", "Monte Nebo"],
                    correctAnswer: "Monte Sinai",
                  },
                ],
              },
            // Nível 3: Levítico
            {
                level: 3,
                questions: [
                  {
                    question: "Qual livro da Bíblia contém as leis e rituais para os sacerdotes?",
                    options: ["Êxodo", "Levítico", "Números", "Deuteronômio"],
                    correctAnswer: "Levítico",
                  },
                  {
                    question: "Qual era o dia mais sagrado do ano para os israelitas?",
                    options: ["Páscoa", "Pentecostes", "Dia da Expiação", "Tabernáculos"],
                    correctAnswer: "Dia da Expiação",
                  },
                  {
                    question: "Quais animais eram considerados puros para o consumo?",
                    options: ["Porco e Coelho", "Camelo e Lebre", "Vaca e Ovelha", "Cavalo e Jumento"],
                    correctAnswer: "Vaca e Ovelha",
                  },
                  {
                    question: "Qual era o castigo para a prática da idolatria?",
                    options: ["Exílio", "Multa", "Açoitamento", "Pena de Morte"],
                    correctAnswer: "Pena de Morte",
                  },
                  {
                    question: "Qual festa celebrava a colheita dos primeiros frutos?",
                    options: ["Páscoa", "Pentecostes", "Tabernáculos", "Hanukkah"],
                    correctAnswer: "Pentecostes",
                  },
                  {
                    question: "Qual era o papel dos sacerdotes na sociedade israelita?",
                    options: ["Guerreiros", "Juízes", "Intermediários entre Deus e o povo", "Agricultores"],
                    correctAnswer: "Intermediários entre Deus e o povo",
                  },
                  {
                    question: "Quais eram as ofertas de sacrifício mais comuns?",
                    options: ["Dinheiro e Joias", "Alimentos e Bebidas", "Animais e Grãos", "Terra e Propriedades"],
                    correctAnswer: "Animais e Grãos",
                  },
                  {
                    question: "Qual era o propósito do ano sabático?",
                    options: ["Descanso da terra e libertação dos escravos", "Construção de templos", "Guerra contra inimigos", "Celebração anual"],
                    correctAnswer: "Descanso da terra e libertação dos escravos",
                  },
                  {
                    question: "Qual era a punição para blasfêmia?",
                    options: ["Exílio", "Açoitamento", "Prisão", "Apedrejamento"],
                    correctAnswer: "Apedrejamento",
                  },
                  {
                    question: "Qual era o propósito do dízimo?",
                    options: ["Sustentar o rei", "Pagar impostos", "Sustentar os levitas e os pobres", "Construir cidades"],
                    correctAnswer: "Sustentar os levitas e os pobres",
                  },
                ],
              },
            // Nível 4: Números
            {
                level: 4,
                questions: [
                  {
                    question: "Quantas vezes Moisés bateu na rocha para tirar água?",
                    options: ["1", "2", "3", "4"],
                    correctAnswer: "2",
                  },
                  {
                    question: "Quantos espias foram enviados para Canaã?",
                    options: ["2", "10", "12", "40"],
                    correctAnswer: "12",
                  },
                  {
                    question: "Quantos anos os israelitas vagaram no deserto?",
                    options: ["10", "20", "30", "40"],
                    correctAnswer: "40",
                  },
                  {
                    question: "Qual era o nome do profeta que foi chamado para amaldiçoar Israel?",
                    options: ["Isaías", "Jeremias", "Balaão", "Ezequiel"],
                    correctAnswer: "Balaão",
                  },
                  {
                    question: "Qual animal falou com Balaão?",
                    options: ["Leão", "Jumento", "Cavalo", "Serpente"],
                    correctAnswer: "Jumento",
                  },
                  {
                    question: "Qual era o nome do sumo sacerdote que liderou o povo com Moisés?",
                    options: ["Arão", "Eleazar", "Fineias", "Josué"],
                    correctAnswer: "Arão",
                  },
                  {
                    question: "Qual era a tribo responsável pelo tabernáculo?",
                    options: ["Judá", "Levi", "Benjamim", "Efraim"],
                    correctAnswer: "Levi",
                  },
                  {
                    question: "Qual era o nome da rebelião contra a liderança de Moisés e Arão?",
                    options: ["Rebelião de Coré", "Rebelião de Absalão", "Rebelião de Jezabel", "Rebelião de Judas"],
                    correctAnswer: "Rebelião de Coré",
                  },
                  {
                    question: "Qual era o sinal que Deus deu para confirmar a liderança de Arão?",
                    options: ["Maná", "Água da rocha", "Vara que floresceu", "Colunas de fogo"],
                    correctAnswer: "Vara que floresceu",
                  },
                  {
                    question: "Quantos homens foram contados no primeiro censo de Israel?",
                    options: ["603.550", "603.500", "600.000", "650.000"],
                    correctAnswer: "603.550",
                  },
                ],
              },
            // Nível 5: Deuteronômio
            {
                level: 5,
                questions: [
                  {
                    question: "Qual livro da Bíblia é uma repetição da lei?",
                    options: ["Levítico", "Números", "Deuteronômio", "Josué"],
                    correctAnswer: "Deuteronômio",
                  },
                  {
                    question: "Qual mandamento é conhecido como o Shemá?",
                    options: [
                      "Não matarás",
                      "Honra teu pai e tua mãe",
                      "Amarás o Senhor teu Deus de todo o teu coração",
                      "Não furtarás",
                    ],
                    correctAnswer: "Amarás o Senhor teu Deus de todo o teu coração",
                  },
                  {
                    question: "Quem sucedeu Moisés como líder de Israel?",
                    options: ["Arão", "Josué", "Calebe", "Eleazar"],
                    correctAnswer: "Josué",
                  },
                  {
                    question: "Qual rio Moisés não atravessou para entrar na Terra Prometida?",
                    options: ["Jordão", "Nilo", "Eufrates", "Tigre"],
                    correctAnswer: "Jordão",
                  },
                  {
                    question: "Onde Moisés morreu?",
                    options: ["Monte Sinai", "Monte Moriá", "Monte Nebo", "Monte Hermon"],
                    correctAnswer: "Monte Nebo",
                  },
                  {
                    question: "Qual era a idade de Moisés quando ele morreu?",
                    options: ["80", "100", "120", "150"],
                    correctAnswer: "120",
                  },
                  {
                    question: "Qual era o nome da bênção que Moisés deu às tribos de Israel?",
                    options: [
                      "Bênção Sacerdotal",
                      "Bênção de Jacó",
                      "Bênção de Moisés",
                      "Bênção de Abraão",
                    ],
                    correctAnswer: "Bênção de Moisés",
                  },
                  {
                    question: "Qual era o propósito das cidades de refúgio?",
                    options: [
                      "Proteger os pobres",
                      "Servir como centros de comércio",
                      "Proteger os acusados de homicídio culposo",
                      "Armazenar alimentos",
                    ],
                    correctAnswer: "Proteger os acusados de homicídio culposo",
                  },
                  {
                    question: "Qual festa foi instituída para lembrar a peregrinação no deserto?",
                    options: ["Páscoa", "Pentecostes", "Tabernáculos", "Hanukkah"],
                    correctAnswer: "Tabernáculos",
                  },
                  {
                    question: "Qual era a condição para herdar a Terra Prometida?",
                    options: [
                      "Ser descendente de Arão",
                      "Guardar os mandamentos de Deus",
                      "Pagar o dízimo",
                      "Ser circuncidado",
                    ],
                    correctAnswer: "Guardar os mandamentos de Deus",
                  },
                ],
              },
            // Nível 6: Josué
            {
                level: 6,
                questions: [
                  {
                    question: "Quem liderou os israelitas após a morte de Moisés?",
                    options: ["Arão", "Josué", "Calebe", "Eleazar"],
                    correctAnswer: "Josué",
                  },
                  {
                    question: "Qual cidade foi a primeira a ser conquistada em Canaã?",
                    options: ["Jerusalém", "Jericó", "Ai", "Hazor"],
                    correctAnswer: "Jericó",
                  },
                  {
                    question: "Qual foi o sinal do pacto de Deus com Raabe?",
                    options: [
                      "Arco-íris",
                      "Cordão escarlate na janela",
                      "Circuncisão",
                      "Sábado",
                    ],
                    correctAnswer: "Cordão escarlate na janela",
                  },
                  {
                    question: "Quantos dias os israelitas marcharam ao redor de Jericó?",
                    options: ["3", "7", "10", "12"],
                    correctAnswer: "7",
                  },
                  {
                    question: "O que aconteceu com o sol durante a batalha contra os amorreus?",
                    options: [
                      "Escureceu",
                      "Brilhou mais forte",
                      "Parou",
                      "Caiu",
                    ],
                    correctAnswer: "Parou",
                  },
                  {
                    question: "Qual era o nome do vale onde Josué derrotouos cinco reis?",
                    options: [
                      "Vale do Jordão",
                      "Vale de Jezreel",
                      "Vale de Ajalom",
                      "Vale de Sidim",
                    ],
                    correctAnswer: "Vale de Ajalom",
                  },
                  {
                    question: "Onde os ossos de José foram enterrados?",
                    options: ["Siquém", "Jerusalém", "Hebron", "Belém"],
                    correctAnswer: "Siquém",
                  },
                  {
                    question: "Qual era a tribo de Josué?",
                    options: ["Judá", "Levi", "Efraim", "Manassés"],
                    correctAnswer: "Efraim",
                  },
                  {
                    question: "Qual era o nome do rio que os israelitas atravessaram para entrar em Canaã?",
                    options: ["Nilo", "Eufrates", "Jordão", "Tigre"],
                    correctAnswer: "Jordão",
                  },
                  {
                    question: "Onde a arca da aliança foi colocada após a conquista de Canaã?",
                    options: ["Jerusalém", "Silo", "Gibeão", "Betel"],
                    correctAnswer: "Silo",
                  },
                ],
              },
            // Nível 7: Juízes
            {
                level: 7,
                questions: [
                  {
                    question: "Quantos juízes lideraram Israel?",
                    options: ["10", "12", "15", "20"],
                    correctAnswer: "12",
                  },
                  {
                    question: "Qual juiz era conhecido por sua força?",
                    options: ["Gideão", "Sansão", "Débora", "Jefte"],
                    correctAnswer: "Sansão",
                  },
                  {
                    question: "Qual juíza liderou Israel e cantou um cântico de vitória?",
                    options: ["Rute", "Débora", "Ester", "Miriam"],
                    correctAnswer: "Débora",
                  },
                  {
                    question: "Qual juiz derrotou os midianitas com 300 homens?",
                    options: ["Gideão", "Sansão", "Jefte", "Eúde"],
                    correctAnswer: "Gideão",
                  },
                  {
                    question: "Qual juiz fez um voto precipitado que o levou a sacrificar sua filha?",
                    options: ["Gideão", "Sansão", "Jefte", "Eúde"],
                    correctAnswer: "Jefte",
                  },
                  {
                    question: "Qual juiz era canhoto e matou o rei de Moabe?",
                    options: ["Gideão", "Sansão", "Jefte", "Eúde"],
                    correctAnswer: "Eúde",
                  },
                  {
                    question: "Qual era o nome da mulher que traiu Sansão?",
                    options: ["Dalila", "Jezabel", "Salomé", "Eva"],
                    correctAnswer: "Dalila",
                  },
                  {
                    question: "Qual era o nome do deus que os filisteus adoravam?",
                    options: ["Baal", "Dagon", "Moloque", "Astarote"],
                    correctAnswer: "Dagon",
                  },
                  {
                    question: "Qual era o nome da sogra de Rute?",
                    options: ["Sara", "Noemi", "Rebeca", "Raquel"],
                    correctAnswer: "Noemi",
                  },
                  {
                    question: "Qual livro da Bíblia conta a história de Rute?",
                    options: ["Juízes", "Rute", "1 Samuel", "2 Samuel"],
                    correctAnswer: "Rute",
                  },
                ],
              },
            // Nível 8: 1 Samuel
            {
                level: 8,
                questions: [
                  {
                    question: "Quem foi o último juiz de Israel e ungiu o primeiro rei?",
                    options: ["Davi", "Samuel", "Saul", "Salomão"],
                    correctAnswer: "Samuel",
                  },
                  {
                    question: "Quem foi o primeiro rei de Israel?",
                    options: ["Davi", "Samuel", "Saul", "Salomão"],
                    correctAnswer: "Saul",
                  },
                  {
                    question: "Quem derrotou o gigante Golias?",
                    options: ["Davi", "Samuel", "Saul", "Salomão"],
                    correctAnswer: "Davi",
                  },
                  {
                    question: "Qual era a tribo de Saul?",
                    options: ["Judá", "Benjamim", "Levi", "Efraim"],
                    correctAnswer: "Benjamim",
                  },
                  {
                    question: "Qual era o nome do filho de Saul e amigo de Davi?",
                    options: ["Absalão", "Jonatas", "Isbosete", "Adonias"],
                    correctAnswer: "Jonatas",
                  },
                  {
                    question: "Qual instrumento Davi tocava?",
                    options: ["Harpa", "Trombeta", "Flauta", "Tamborim"],
                    correctAnswer: "Harpa",
                  },
                  {
                    question: "Qual era o nome da esposa de Davi e filha de Saul?",
                    options: ["Bate-Seba", "Mical", "Abigail", "Ester"],
                    correctAnswer: "Mical",
                  },
                  {
                    question: "Onde Samuel ungiu Davi como rei?",
                    options: ["Belém", "Jerusalém", "Hebron", "Silo"],
                    correctAnswer: "Belém",
                  },
                  {
                    question: "Qual era o nome do sacerdote que ajudou Davi a fugir de Saul?",
                    options: ["Arão", "Zadoque", "Abiatar", "Eleazar"],
                    correctAnswer: "Abiatar",
                  },
                  {
                    question: "Qual era o nome do gigante filisteu que Davi derrotou?",
                    options: ["Golias", "Dagon", "Baal", "Moloque"],
                    correctAnswer: "Golias",
                  },
                ],
              },
            // Nível 9: 2 Samuel
            {
                level: 9,
                questions: [
                  {
                    question: "Quem se tornou rei de Israel após a morte de Saul?",
                    options: ["Davi", "Isbosete", "Absalão", "Salomão"],
                    correctAnswer: "Davi",
                  },
                  {
                    question: "Qual cidade Davi conquistou e tornou sua capital?",
                    options: ["Belém", "Jericó", "Jerusalém", "Hebron"],
                    correctAnswer: "Jerusalém",
                  },
                  {
                    question: "Com quem Davi cometeu adultério?",
                    options: ["Mical", "Abigail", "Bate-Seba", "Ester"],
                    correctAnswer: "Bate-Seba",
                  },
                  {
                    question: "Quem era o marido de Bate-Seba?",
                    options: ["Saul", "Jonatas", "Urias", "Nabal"],
                    correctAnswer: "Urias",
                  },
                  {
                    question: "Qual filho de Davi se rebelou contra ele?",
                    options: ["Salomão", "Absalão", "Amnom", "Adonias"],
                    correctAnswer: "Absalão",
                  },
                  {
                    question: "Como Absalão morreu?",
                    options: [
                      "Em batalha",
                      "Por doença",
                      "Caindo de um cavalo",
                      "Preso pelos cabelos em uma árvore",
                    ],
                    correctAnswer: "Preso pelos cabelos em uma árvore",
                  },
                  {
                    question: "Quem era o profeta que repreendeu Davi por seu pecado?",
                    options: ["Isaías", "Jeremias", "Natã", "Ezequiel"],
                    correctAnswer: "Natã",
                  },
                  {
                    question: "Qual era o nome da arca da aliança que Davi trouxe para Jerusalém?",
                    options: [
                      "Arca do Testemunho",
                      "Arca de Deus",
                      "Arca da Aliança",
                      "Arca da Promessa",
                    ],
                    correctAnswer: "Arca da Aliança",
                  },
                  {
                    question: "Qual era o nome do general do exército de Davi?",
                    options: ["Joabe", "Abner", "Benaia", "Itai"],
                    correctAnswer: "Joabe",
                  },
                  {
                    question: "Quantos anos Davi reinou sobre Israel?",
                    options: ["20", "30", "40", "50"],
                    correctAnswer: "40",
                  },
                ],
              },
            // Nível 10: 1 Reis
            {
                level: 10,
                questions: [
                  {
                    question: "Quem sucedeu Davi como rei de Israel?",
                    options: ["Salomão", "Absalão", "Adonias", "Roboão"],
                    correctAnswer: "Salomão",
                  },
                  {
                    question: "Qual era a maior virtude de Salomão?",
                    options: ["Força", "Riqueza", "Sabedoria", "Beleza"],
                    correctAnswer: "Sabedoria",
                  },
                  {
                    question: "Qual rei construiu o primeiro templo em Jerusalém?",
                    options: ["Davi", "Salomão", "Hirão", "Ciro"],
                    correctAnswer: "Salomão",
                  },
                  {
                    question: "Quem era a rainha que visitou Salomão para testar sua sabedoria?",
                    options: [
                      "Rainha Ester",
                      "Rainha de Sabá",
                      "Rainha de Babilônia",
                      "Rainha de Egito",
                    ],
                    correctAnswer: "Rainha de Sabá",
                  },
                  {
                    question: "Qual era o nome do profeta que confrontou Elias no Monte Carmelo?",
                    options: ["Isaías", "Jeremias", "Elias", "Eliseu"],
                    correctAnswer: "Elias",
                  },
                  {
                    question: "Quantos anos Salomão reinou sobre Israel?",
                    options: ["20", "30", "40", "50"],
                    correctAnswer: "40",
                  },
                  {
                    question: "Qual era o nome do rei de Tiro que ajudou Salomão a construir o templo?",
                    options: ["Hirão", "Faraó", "Ciro", "Nabucodonosor"],
                    correctAnswer: "Hirão",
                  },
                  {
                    question: "Qual era o nome do ídolo que Salomão adorou em sua velhice?",
                    options: ["Baal", "Dagon", "Moloque", "Astarote"],
                    correctAnswer: "Astarote",
                  },
                  {
                    question: "Qual profeta anunciou a divisão do reino de Israel?",
                    options: ["Isaías", "Jeremias", "Aías", "Ezequiel"],
                    correctAnswer: "Aías",
                  },
                  {
                    question: "Quem se tornou o primeiro rei do reino do norte de Israel após a divisão?",
                    options: ["Roboão", "Jeroboão", "Reoboão", "Jeroboam"],
                    correctAnswer: "Jeroboão",
                  },
                ],
              },
        ];

        let currentLevel = 1;
        let score = 0;
        let currentQuestions = [];
        let correctAnswersCount = 0;

        const questionElement = document.getElementById("question");
        const optionsElement = document.getElementById("options");
        const feedbackElement = document.getElementById("feedback");
        const nextLevelButton = document.getElementById("next-level");
        const restartQuizButton = document.getElementById("restart-quiz");
        const levelElement = document.getElementById("level");
        const scoreElement = document.getElementById("score");
        const animationContainer = document.getElementById("animation-container");

        nextLevelButton.addEventListener("click", nextLevel);
        restartQuizButton.addEventListener("click", startQuiz);

        function selectQuestionsForLevel(level) {
            const levelQuestions = quizData.filter((q) => q.level === level)[0].questions;
            const selectedQuestions = [];
            const usedQuestionIndices = new Set();

            while (selectedQuestions.length < 10) {
                const randomIndex = Math.floor(Math.random() * levelQuestions.length);
                if (!usedQuestionIndices.has(randomIndex)) {
                    usedQuestionIndices.add(randomIndex);
                    selectedQuestions.push(levelQuestions[randomIndex]);
                }
            }
            return selectedQuestions;
        }

        function startQuiz() {
            currentLevel = 1;
            score = 0;
            correctAnswersCount = 0;
            currentQuestions = selectQuestionsForLevel(currentLevel);
            levelElement.textContent = currentLevel;
            scoreElement.textContent = score;
            questionElement.classList.remove("text-red-500", "text-green-500");
            feedbackElement.classList.remove("correct", "incorrect");
            feedbackElement.textContent = "";
            nextLevelButton.classList.add("hidden");
            restartQuizButton.classList.add("hidden");
            animationContainer.classList.add("hidden");
            loadQuestion();
        }

        function loadQuestion() {
            const currentQuestion = currentQuestions.shift();
            questionElement.textContent = currentQuestion.question;
            optionsElement.innerHTML = "";

            currentQuestion.options.forEach((option) => {
                const button = document.createElement("button");
                button.className = "option";
                button.textContent = option;
                button.addEventListener("click", () => handleOptionSelect(option, currentQuestion.correctAnswer));
                optionsElement.appendChild(button);
            });
        }

        function handleOptionSelect(selectedOption, correctAnswer) {
            const options = optionsElement.querySelectorAll(".option");
            options.forEach((option) => {
                option.disabled = true;
                if (option.textContent === correctAnswer) {
                    option.classList.add("correct");
                } else if (option.textContent === selectedOption) {
                    option.classList.add("incorrect");
                }
            });

            if (selectedOption === correctAnswer) {
                score++;
                correctAnswersCount++;
                scoreElement.textContent = score;
                feedbackElement.textContent = "Resposta Correta!";
                feedbackElement.classList.add("correct");
            } else {
                feedbackElement.textContent = "Resposta Incorreta!";
                feedbackElement.classList.add("incorrect");
            }

            if (currentQuestions.length === 0) {
                if (correctAnswersCount >= 7) {
                    if (currentLevel < 10) {
                        feedbackElement.textContent = "Parabéns! Nível Concluído!";
                        feedbackElement.classList.remove("incorrect");
                        feedbackElement.classList.add("correct");
                        animationContainer.classList.remove("hidden");
                        nextLevelButton.classList.remove("hidden");
                    } else {
                        feedbackElement.textContent = "Parabéns! Você Concluiu o Quiz Bíblico!";
                        feedbackElement.classList.remove("incorrect");
                        feedbackElement.classList.add("correct");
                        animationContainer.classList.remove("hidden");
                        restartQuizButton.classList.remove("hidden");
                    }
                } else {
                    feedbackElement.textContent = "Você Não Avançou de Nível. Tente Novamente!";
                    feedbackElement.classList.remove("correct");
                    feedbackElement.classList.add("incorrect");
                    restartQuizButton.classList.remove("hidden");
                }
            } else {
                setTimeout(loadQuestion, 1500);
            }
        }

        function nextLevel() {
            currentLevel++;
            levelElement.textContent = currentLevel;
            correctAnswersCount = 0;
            currentQuestions = selectQuestionsForLevel(currentLevel);
            questionElement.classList.remove("text-red-500", "text-green-500");
            feedbackElement.classList.remove("correct", "incorrect");
            feedbackElement.textContent = "";
            nextLevelButton.classList.add("hidden");
            animationContainer.classList.add("hidden");
            loadQuestion();
        }

        // Inicia o quiz quando a página carrega
        startQuiz();
    