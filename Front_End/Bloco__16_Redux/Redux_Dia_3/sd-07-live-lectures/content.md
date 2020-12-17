---
presentation:
  theme: "black.css"
---

<!-- slide  -->
Usando o Redux no React - Prática

<!-- slide vertical=true -->
Redux
- Anteriormente, em Front-End...
  - React
  - Introdução ao Redux
  - React + Redux
- Hoje
  - Prática
  - Replay ⏮
- Em um futuro bem próximo...
  - Redux com actions assíncronas

<!-- slide vertical=true -->
Formalizando...
- Setup Redux(action, reducer, store)
- Provider 📡
- mapStateToProps ♲
- mapDispatchToProps ♲
- connect 📻

<!-- slide -->
![again](https://media.giphy.com/media/W1emeLXnYsX8TDmhS5/giphy.gif)
De novo? 🤔

<!-- slide -->
Hoje veremos mais um exemplo usando Redux no React
![algorithm](https://media.giphy.com/media/irIRA0HQCQiTiIMMNm/giphy.gif)

<!-- slide -->
🛒
Faremos um carrinho de compras com
as seguintes features:
- Adicionar itens ao carrinho
- Ver lista de intes no carrinho
- Ver preço total
- Estoque limita a adição de itens

<!-- slide -->
Plano de hoje:

1 - Criar o ambiente para que o redux funcione (action, reducer e store).

2 - Usar `react-redux` para integrar o redux ao react