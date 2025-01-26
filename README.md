# React Organograma

## Sobre o Projeto

Este projeto é um organograma desenvolvido em React, com divisões específicas relacionadas à tecnologia. Ele foi criado para praticar conceitos fundamentais de React, como:

- Componentização
- Manipulação de estado com hooks (useState)
- Passagem de props entre componentes
- Renderização condicional
- Mapeamento de listas para gerar elementos dinâmicos

## Funcionalidades

- Adição de novos colaboradores em times específicos.
- Exibição de times com cores personalizadas (primária e secundária).
- Renderização condicional: os times só aparecem se houver colaboradores associados.

## Tecnologias Utilizadas

- **React**: Biblioteca principal para criação do front-end.
- **CSS**: Para estilizações personalizadas.
- **JavaScript (ES6+)**: Linguagem de programação utilizada no desenvolvimento.

## Como Rodar o Projeto Localmente

### Pré-requisitos

Certifique-se de ter o Node.js instalado. Caso não tenha, [faça o download aqui](https://nodejs.org/).

### Passo a Passo

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/Felipedmgs/react_organograma.git
   ```

2. **Instale as Dependências** No diretório do projeto, execute:

   ```bash
   npm install
   ```

3. **Inicie o Servidor de Desenvolvimento**

   ```bash
   npm start
   ```

4. **Acesse no Navegador** O projeto estará disponível em:

   ```
   http://localhost:3000
   ```

## Estrutura do Projeto

```plaintext
src/
├── componentes/       # Componentes reutilizáveis do projeto
│   ├── Banner.js      # Banner do topo da aplicação
│   ├── Formulario.js  # Formulário para adicionar novos colaboradores
│   ├── ListaSuspensa.js # Componente para selecionar times
│   ├── Time.js        # Componente que representa um time e seus colaboradores
├── App.js             # Componente principal que conecta tudo
├── index.js           # Ponto de entrada do React
└── App.css            # Estilizações gerais do projeto
```

## Melhorias Futuras

- Implementar persistência de dados utilizando uma API ou localStorage.
- Adicionar funcionalidade de remoção e edição de colaboradores.
- Permitir personalização de times (cores, nomes, etc.).
- Criar testes automatizados para garantir a qualidade do código.

## Contribuição

Se você deseja contribuir com melhorias ou novas funcionalidades:

1. Faça um fork do repositório.
2. Crie uma branch para sua funcionalidade: `git checkout -b minha-feature`.
3. Faça commit das suas alterações: `git commit -m 'Adicionei uma nova feature'`.
4. Envie para o repositório original: `git push origin minha-feature`.
5. Abra um Pull Request explicando suas alterações.

## Autor

Desenvolvido por **Felipe durante o curso da Alura**. Este é o meu primeiro projeto em React, e estou empolgado para aprender e evoluir ainda mais! 🎉

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

Obrigado pela leitura!
