## Projeto

- ✅ Typescript
- ✅ Testes unitários
- ✅ Testes e2e
- ✅ Mobile friendly
- ✅ Validação de formulário
- ✅ Deploy da aplicação no vercel
- ✅ Paginação
- ✅ Sistema de busca
- ✅ Wishlist
- ✅ Tema vermelho, azul e preto

## Techs

- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [React Input Mask](https://github.com/sanniassin/react-input-mask)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Joi](https://joi.dev/api/?v=17.6.0)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [Styled Media Query](https://github.com/morajabi/styled-media-query)
- [Styled Icons](https://styled-icons.dev/)

## Acessos

Acesse o `Deploy` da aplicação pelo link abaixo e veja o site funcionando:
```bash
marvel-store-self.vercel.app
```

## Getting Started

Primeiro, clone o repositório e instale as dependências com o comando `yarn`. Após isso, basta rodar:

```bash
yarn start
```

Abra [http://localhost:3000](http://localhost:3000) no seu site e veja o resultado.

## Comandos

- `start`: roda a aplicação no `localhost:3000`
- `build`: cria a versão de build para produção
- `lint`: roda o linter em todos os componentes e páginas
- `test`: roda o jest para testes em todos os componentes e páginas
- `test:watch`: roda o jest em modo watch
- `storybook`: inicia o storybook no `localhost:6006`
- `test:e2e`: inicia a aplicação, depois inicia o cypress

## Responsividade

![responsivo1](https://user-images.githubusercontent.com/81202572/187120260-9b4f202e-88d1-4e2b-847b-3f207523bacd.gif)
![responsivo2](https://user-images.githubusercontent.com/81202572/187120502-22f229e6-f1ef-4574-9ce0-7005243387bc.gif)
![responsivo3](https://user-images.githubusercontent.com/81202572/187120635-6cfb1402-c788-419d-bbac-3e029b49a4f2.gif)
![responsivo4](https://user-images.githubusercontent.com/81202572/187120925-cf844400-dd75-4052-bb43-2e9bce9c4aca.gif)
![responsivo5](https://user-images.githubusercontent.com/81202572/187120929-7c58218c-0865-40bf-bda1-6d0548ddaf7e.gif)
![responsivo6](https://user-images.githubusercontent.com/81202572/187121433-8a2d1830-680b-40d8-8bb0-1e83d8cefdf2.gif)

- Experiência customizada para celular, contando com menu sanduíche e adaptação de todas as tabelas/componentes

# Validações de formulário

![validacao1](https://user-images.githubusercontent.com/81202572/187123062-62d283f4-6746-49b4-80db-d1408dda30ab.gif)
![validacao2](https://user-images.githubusercontent.com/81202572/187123098-091c8d5f-ccc0-42aa-b9e9-d7c187ce7db7.gif)

- Mensagens personalizadas 
- Input Mask que completa a resposta do usuário. Ex: quando digita o cpf automaticamente insere os '.' e só permite digitar números
- Validação é feita assim que o usuário dá o submit. 
- O botão de submit só habilita quando todos os campos estão preenchidos

# Validações realizadas

**Nome**
  - Campo obrigatório
  - Valida a entrada para que tenha no mínimo 3 dígitos
  
**Sobrenome**
  - Campo obrigatório
  - Valida a entrada para que tenha no mínimo 3 dígitos

**CPF**
  - Campo obrigatório
  - Valida a entrada para que tenha no mínimo 11 dígitos
  - Valida a formatação do CPF 000.000.000-00
 
**Email**
  - Campo obrigatório
  - Valida a entrada para que tenha no mínimo 5 dígitos
  - Precisa conter nessa ordem: string@string.string
  
**Senha**
  - Campo obrigatório
  - Valida a entrada para que tenha no mínimo 8 dígitos
  -  Precisa ter no mínimo: 8 dígitos, 1 maiúscula, 1 minúscula, 1 número, 1 caracter especial


# Busca
![busca1](https://user-images.githubusercontent.com/81202572/187123299-8f8b0ca7-dd52-43a1-8351-944b4af1bc31.gif)

# Paginação
![paginacao1](https://user-images.githubusercontent.com/81202572/187123397-c42f77ee-d11e-44d1-99f2-8c068231ea24.gif)

# Autenticação e login
  - Validação através de token no Localstorage
  - A cada 1h o token é expirado e é necessário refazer o login
  - Proteção das rotas que exigem autenticação, não é possível consumir nenhum conteúdo sem estar logado antes
 
# Storybook
![storybook1](https://user-images.githubusercontent.com/81202572/187123465-f6316193-3f90-4276-8273-5ce3144edff4.gif)

- ✅ Documentação de todo o design system da plataforma 
- ✅ Todos os estilos de botão, input, modal, etc representados na plataforma
- ✅ Possibilidade de edição e manipulação do componente de forma isolada
 
# Testes unitários
![testeunit1](https://user-images.githubusercontent.com/81202572/187123440-e5e5c05c-89d8-4cca-b7e2-dd79886b7f1f.png)

# Teste e2e
![e2e1](https://user-images.githubusercontent.com/81202572/187123550-8c43afc3-6701-4e1b-bc28-7a07b61fed3d.gif)
  - Integração cypress + typescript
  - Integração cypress + eslint  
  - Uso de comandos para atividades repetidas (Ex: Login, Signup...) e tipagem dos comandos customizados para aparecerem no autocomplete
  - Escrita de um teste-exemplo e2e para logar e validar se os componentes da homepage estão renderizados
  
# Temas
![theme1](https://user-images.githubusercontent.com/81202572/187123784-27d0dd0e-5c76-4c85-b5e9-0acaf3a5b0d1.gif)

- Criação do tema vermelho (principal), azul e preto

# Wishlist
![wishlist1](https://user-images.githubusercontent.com/81202572/187123863-f4633789-5448-4047-bc54-9ac07c6edd8e.gif)

- Salvar comics como favorito
- Página exclusiva para consultar todas os itens salvos
- Possibilidade de criar diferentes contas e ter uma wishlist personalizada para cada usuário criado



