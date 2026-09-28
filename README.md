# Portfólio de Henrique Pucci

Site de portfólio profissional, posicionado para vagas de Analista de Requisitos,
Analista de Produto e Business Analyst. Página única em React com Vite, publicada
na Vercel em <https://hpportifolio.vercel.app>.

## Comandos

```bash
npm install        # instala as dependências
npm run dev        # servidor de desenvolvimento em http://localhost:5173
npm run lint       # ESLint, precisa passar sem erro
npm test           # Vitest, 40 testes
npm run build      # build de produção em dist/
npm run preview    # serve o build de produção
```

## Onde mexer no conteúdo

| O que atualizar | Arquivo |
|---|---|
| Estudos de caso, texto e evidências | `src/data/projects.js` |
| Textos de interface, topo, sobre, trajetória, competências | `src/data/translations.js` |
| Dados de contato, links e caminho do currículo | `PERFIL`, em `src/data/translations.js` |
| Imagens dos artefatos e legendas | `src/data/media.js` e `public/assets/projetos/` |
| Título, descrição, Open Graph e JSON-LD | `index.html` |
| Currículo em PDF | `public/assets/Curriculo_Henrique_Pucci.pdf` |

O português é a fonte de verdade de cada projeto. A tradução vive no campo `en`
do mesmo objeto, e o campo que não existir em `en` cai automaticamente para o
português. Não há tradução automática em tempo de execução.

### Estrutura de um estudo de caso

Todo projeto em `src/data/projects.js` segue a mesma sequência, que é a mesma
renderizada no modal:

`context` · `role` · `scope` · `process` · `fronts` (opcional) · `artifacts` ·
`validation` · `results` · `nextSteps` · `evidence`

Duas regras que os testes cobrem e que devem ser mantidas:

- **`results` é só o que foi entregue e confirmado.** Meta ainda não medida vai
  em `nextSteps`, que aparece na interface sob o aviso de que ainda não foi medida.
- **`role` fica em primeira pessoa e em voz ativa.** "Planejei", "Facilitei",
  "Construí", "Converti". Os testes recusam "participei", "ajudei" e "auxiliei".

## Privacidade dos relatórios

Os relatórios das oficinas da ANAC e da ANS contêm nomes, e-mails e imagens de
participantes. Eles saíram de `public/` e vivem em `private/relatorios/`, que não
entra no deploy. As evidências correspondentes aparecem no site sem link, com o
rótulo "não publicado". Para voltar a publicá-los, gere versões editadas sem as
páginas de lista de presença e sem as capturas com rostos, coloque o arquivo em
`public/assets/` e devolva a `url` da evidência em `src/data/projects.js`.

## Acessibilidade

Meta WCAG 2.2 nível AA. O que está implementado:

- link de pular para o conteúdo, landmarks, um único `h1` e hierarquia de títulos;
- navegação completa por teclado, com contorno de foco visível em todo controle;
- modal com `role="dialog"`, foco inicial, contenção de foco, fecho por `Esc` e
  retorno ao elemento que abriu;
- painel de acessibilidade com alto contraste e três tamanhos de texto, com a
  preferência salva no navegador e aplicada antes da primeira pintura;
- `prefers-reduced-motion` respeitado em toda animação;
- revelação por scroll como progressive enhancement: sem JavaScript o conteúdo
  nasce visível;
- auditoria automatizada com axe-core, sem violação nos estados inicial, com o
  modal aberto e em alto contraste.

## Verificações executadas

| Verificação | Resultado |
|---|---|
| `npm run lint` | sem erros |
| `npm test` | 40 testes, todos passando |
| `npm run build` | build gerado sem aviso |
| axe-core, WCAG 2.0/2.1/2.2 AA e best practice | 0 violações em 3 estados |
| Larguras 320, 640, 768, 1024 e 1440 px | sem rolagem horizontal |
| Erros de console e requisições com falha | nenhum |
| Âncoras internas | nenhuma quebrada |

O equivalente a zoom de 200% foi testado como viewport de 640 px de largura, e o
equivalente a 400% como 320 px.

## Pendências que dependem do proprietário

1. **O PDF do currículo está desatualizado.** O arquivo em
   `public/assets/Curriculo_Henrique_Pucci.pdf` ainda diz "Engenheiro de Software
   em formação" e "Inglês Intermediário", que o site já corrigiu. Substitua o
   arquivo mantendo o mesmo nome e o botão de download continua funcionando.
2. **Relatórios como evidência.** Enquanto não houver versão editada, as
   evidências de ANAC e ANS aparecem sem link.
3. **Variável de ambiente do formulário.** `VITE_FORMSPREE_ENDPOINT` deve estar
   configurada na Vercel. Sem ela o formulário usa o endpoint embutido.

## Decisão registrada: renderização

O conteúdo é renderizado no cliente, padrão do Vite com React. Buscadores que
executam JavaScript leem tudo, e os dados estruturados em JSON-LD do `index.html`
entregam nome, cargo, formação, competências, publicação e projetos já no HTML
inicial.

Não adotei pré-renderização estática porque ela traria divergência de hidratação
com as preferências de idioma e tema guardadas no navegador, o que produziria erro
de console. Se essa renderização no HTML virar requisito, o caminho é gerar o HTML
no build com `react-dom/server` e trocar `createRoot` por `hydrateRoot`, movendo a
leitura de preferências para depois da hidratação.

## Publicar na Vercel

O deploy é automático a partir do branch `main` do repositório
`HenriPucci/Portifolio`.

```bash
npm run lint && npm test && npm run build   # portão de qualidade
git add -A
git commit -m "mensagem"
git push origin main                         # dispara o deploy
```

A Vercel usa `npm run build` e publica `dist/`. Não há configuração adicional no
projeto: qualquer arquivo em `public/` vai para a raiz do site, e o que está fora
dela não é publicado.
