# Jogo de Adivinhação
Um jogo simples onde o jogador adivinha a posição de uma figura (coração inteiro, coração partido ou gato). As posições são embaralhadas a cada rodada, e o jogador pode escolher entre dois níveis de dificuldade: Fácil (2 tentativas) ou Difícil (1 tentativa). Ao final da rodada, a carta correta é revelada com o emoji correspondente.

## Estrutura do Projeto
```
├── index.html        # Estrutura da página
├── README.md         # Este arquivo
├── license.txt       # Licença do projeto
├── css
│   └── styles.css    # Estilização com gradiente, letras douradas e cartas bege/dourado
└── js
    └── script.js     # Lógica do jogo

```

## Como Jogar
1. Abra o arquivo `index.html` em um navegador.
2. Escolha o nível do jogo: "Fácil (2 tentativas)" ou "Difícil (1 tentativa)".
3. Aguarde o embaralhamento das cartas.
4. Leia a pergunta "Onde está o [figura]?" e clique na posição que você acredita estar correta.
5. Veja o resultado:
   - Se acertar, a carta correta vira mostrando o emoji e exibe "Você acertou!".
   - Se errar, no modo fácil você tem outra tentativa; no modo difícil ou ao esgotar as tentativas, a carta correta vira e exibe "Você errou! Tentativas esgotadas.".
6. Após 2 segundos, o jogo volta à tela de seleção de nível. Clique em "Nova Rodada" para jogar novamente.

## Estilo
- **Fundo**: Gradiente radial do roxo (#4b0082) ao preto (#000000).
- **Textos**: Dourado (#ffd700) com fonte estilo árabe (Scheherazade New), exceto as cartas.
- **Cartas**: Bege/dourado com texto preto (#000000). Quando reveladas, mostram o emoji.

## Substituição de Emojis
Os emojis (❤️, 💔, 🐱) estão definidos no objeto `figures` em `js/script.js`. Para usar imagens próprias:
1. Crie uma pasta `images` na raiz do projeto.
2. Adicione as imagens (ex.: `coracao-inteiro.png`, `coracao-partido.png`, `gato.png`).
3. Atualize o objeto `figures` em `script.js` para:
   ```javascript
   const figures = {
       "coração inteiro": "<img src='images/coracao-inteiro.png' alt='coração inteiro'>",
       "coração partido": "<img src='images/coracao-partido.png' alt='coração partido'>",
       "gato": "<img src='images/gato.png' alt='gato'>"
   };