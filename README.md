# ShopFinity

**Landing page de Robux com entrega automática, integrada ao Discord.**

Site institucional para venda de Robux, focado em transmitir segurança, profissionalismo e uma experiência rápida para o público gamer. Construído do zero em **HTML5 + CSS3 + JavaScript puro** — sem frameworks, sem dependências, 100% otimizado para performance.

🔗 **Site proposta:** [itsnikotina.github.io/ShopFinity](https://itsnikotina.github.io/ShopFinity/)

🔗 **Site final: https://www.shopfinity.com.br/**

---

## ✨ Sobre o projeto

A ShopFinity é uma loja de Robux que entrega os produtos automaticamente via bot no Discord. O objetivo desta landing page é converter visitantes em clientes, passando confiança através de um visual **dark mode**, moderno e minimalista, com a identidade visual (azul, amarelo e preto) da marca.

## 🚀 Funcionalidades

- **Header fixo** com logo animada (duas camadas, spin contínuo) e badge de estoque disponível
- **Hero** com CTA principal e luzes de fundo animadas
- **Barra de estatísticas** (pedidos entregues, tempo de entrega, segurança, suporte)
- **Grid de pacotes de Robux** com selo de "Mais Vendido" e destaque visual próprio
- **Seção de vantagens** (entrega automática, pagamento seguro, suporte 24h)
- **Avaliações** simulando feedbacks reais do Discord
- **FAQ** nativo com `<details>`/`<summary>`, sem JavaScript extra
- **Botão flutuante** de voltar ao topo + barra de progresso de leitura
- **Totalmente responsivo**, mobile-first
- Animações leves com `IntersectionObserver` (scroll reveal) e respeito a `prefers-reduced-motion`

## 🛠️ Tecnologias

- HTML5 semântico
- CSS3 puro (variáveis, Grid, Flexbox, `@font-face`, animações)
- JavaScript vanilla (sem bibliotecas ou frameworks)

## 📁 Estrutura do projeto

```
ShopFinity/
├── index.html        # Estrutura da página
├── style.css         # Estilos, paleta de cores e animações
├── script.js         # Interações (scroll, reveal, header, back-to-top)
├── fonts/            # Fonte customizada da logo
└── imgs/             # Ícones, logo e imagens do site
```

## 💻 Como rodar localmente

Não há build, instalação ou dependências. Basta abrir o `index.html` no navegador:

```bash
git clone https://github.com/itsnikotina/ShopFinity.git
cd ShopFinity
```

Depois é só abrir o `index.html` diretamente ou usar uma extensão como o *Live Server* no VS Code.

## 🌐 Deploy (GitHub Pages)

O site é publicado automaticamente pelo **GitHub Pages**, direto a partir da branch `main`:

1. Vá em **Settings → Pages**
2. Em **Source**, selecione a branch `main` e a pasta `/ (root)`
3. Salve — o site fica disponível em `https://itsnikotina.github.io/ShopFinity/`

## 🎨 Paleta de cores

| Cor | Uso |
|---|---|
| `#060a14` | Fundo principal |
| `#2b52ff` | Azul (destaque, links, glow) |
| `#ffd400` | Amarelo (selo "Mais Vendido", acentos) |
| `#22c55e` | Verde (estoque disponível) |

## 📄 Licença

Todos os direitos reservados © 2026 ShopFinity. Projeto de uso exclusivo do cliente — não licenciado para redistribuição.
