README
Sobre o Projeto
Este projeto é um painel de busca de usuários do GitHub feito em React.
Permite pesquisar um usuário, exibe o avatar, nome e lista de repositórios públicos desse usuário, além de um formulário de exemplo para manipulação de estados e efeitos.

Funcionalidades
Busca de Usuário:
Campo de busca para digitar o nome de usuário do GitHub.
O campo aparece centralizado na tela ao iniciar e, após a busca, fica dentro do header amarelo junto com o avatar e nome do usuário.

Exibição de Perfil:
Mostra avatar, nome e campo de busca dentro do header estilizado.

Listagem de Repositórios:
Lista todos os repositórios públicos do usuário pesquisado, exibindo nome, linguagem principal e link para o GitHub.

Tratamento de Erros:
Se o usuário não existir ou não tiver repositórios públicos, uma mensagem de erro é exibida.

Formulário de Exemplo:
Inclui um formulário para demonstração de manipulação de estados e efeitos com React.

Principais Atualizações
Campo de busca agora aparece dentro do header após a busca, junto com avatar e nome.
Header ocupa toda a largura da tela com fundo amarelo (background: #f9cb2d).
Tratamento de erros aprimorado:
Mensagem clara quando o usuário não existe ou não possui repositórios públicos.
Estilização responsiva para o campo de busca e header.
Código modularizado em componentes: Perfil, ReposList e Formulario.
Estrutura dos Componentes
App.jsx:
Gerencia o estado principal e controla quando mostrar o campo de busca ou o perfil completo.

Perfil:
Exibe o header amarelo, avatar, nome e campo de busca.

ReposList:
Busca e exibe os repositórios do usuário, com tratamento de carregamento e erros.

Formulario:
Exemplo de formulário controlado com hooks.

Como Usar
Digite um nome de usuário do GitHub no campo de busca.
Após digitar mais de 4 caracteres, pressione Enter ou aguarde.
O header amarelo aparecerá com o avatar, nome e campo de busca.
Abaixo, será exibida a lista de repositórios públicos do usuário.
Tecnologias
React
CSS Modules
Observações
O campo de busca só aparece centralizado na tela inicial.
Após a busca, ele fica dentro do header.
O layout é responsivo e adaptado para desktop.
O código está organizado para fácil manutenção e expansão.
