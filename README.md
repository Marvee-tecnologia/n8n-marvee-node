<p align="center">
  <img src="https://scontent.fbnu9-1.fna.fbcdn.net/v/t39.30808-6/472742313_1151706076503081_5803420543167063988_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=ug21G0ah_yoQ7kNvwH9oDKO&_nc_oc=AdmA4oA7RpzNpiMs-128PtuLbRUnA0IVq9ACN4oEFnZ8DNvYIayoSMY3FrFNHlQL9SnT_YKJ1JdSQdUDlZI935sX&_nc_zt=23&_nc_ht=scontent.fbnu9-1.fna&_nc_gid=5lR9jiaPVBjz3npqTUALGQ&oh=00_AfM3hfCIBd0WEqzHNVVy-erckmw-Tjaa_j9kXKJdZNLsAw&oe=6858944F" alt="Marvee Logo" width="1450">
</p>

<h1 align="center">Marvee Node para n8n</h1>

<p align="center">
  <strong>Integração oficial da Marvee para automação de workflows financeiros no n8n</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@marvee-tecnologia/n8n-nodes-marvee" target="_blank">
    <img src="https://img.shields.io/npm/v/@marvee-tecnologia/n8n-nodes-marvee?style=for-the-badge&color=48c4c4" alt="NPM Version">
  </a>
  <a href="https://www.npmjs.com/package/@marvee-tecnologia/n8n-nodes-marvee" target="_blank">
    <img src="https://img.shields.io/npm/dt/@marvee-tecnologia/n8n-nodes-marvee?style=for-the-badge&color=48c4c4" alt="NPM Downloads">
  </a>
  <a href="https://github.com/Marvee-tecnologia/n8n-marvee-node/blob/main/LICENSE.md" target="_blank">
    <img src="https://img.shields.io/badge/license-MIT-48c4c4?style=for-the-badge" alt="License">
  </a>
</p>

<p align="center">
  <a href="https://marvee.com.br" target="_blank"><img src="https://img.shields.io/badge/Website-Oficial-48c4c4?style=for-the-badge" alt="Website"></a>
  <a href="https://marvee.com.br/blog" target="_blank"><img src="https://img.shields.io/badge/Blog-Marvee-48c4c4?style=for-the-badge" alt="Blog"></a>
  <a href="https://academy.marvee.com.br" target="_blank"><img src="https://img.shields.io/badge/Marvee-Academy-48c4c4?style=for-the-badge" alt="Academy"></a>
</p>

## 📖 Sobre

O **Marvee Node** é um pacote oficial que permite integrar a plataforma Marvee com o n8n, possibilitando a automação de processos financeiros através de workflows visuais. Com este node, você pode conectar sua conta Marvee a centenas de outras aplicações e serviços.

## ⚡ Funcionalidades

- **📊 Extratos**: Consulte extratos financeiros detalhados
- **💰 Vendas**: Gerencie vendas (criar, consultar, atualizar e excluir)
- **👥 Clientes**: Acesse informações dos seus clientes
- **📝 Categorias**: Organize suas transações por categorias
- **🏦 Contas**: Gerencie múltiplas contas financeiras

## 🚀 Instalação

### Via n8n Community Nodes

1. Acesse seu n8n
2. Vá para **Settings** → **Community Nodes**
3. Clique em **Install**
4. Digite: `@marvee-tecnologia/n8n-nodes-marvee`
5. Clique em **Install**

### Via npm

```bash
npm install @marvee-tecnologia/n8n-nodes-marvee
```

## 🔧 Configuração

1. **Criar Credencial**: No n8n, crie uma nova credencial do tipo "Marvee API"
2. **API Key**: Insira sua chave da API Marvee (disponível no painel administrativo)
3. **Testar Conexão**: Verifique se a conexão está funcionando corretamente

## 📝 Uso Básico

Após a instalação, o node "Marvee" estará disponível na paleta do n8n. Arraste-o para seu workflow e configure:

1. **Selecione o Recurso**: Statement, Sales, Customers, Categories ou Accounts
2. **Escolha a Operação**: Get, Store, Update ou Delete (conforme disponível)
3. **Configure os Parâmetros**: Defina filtros e parâmetros específicos

## 🛠️ Requisitos

- **n8n**: Versão 0.198.0 ou superior
- **Node.js**: Versão 20.15 ou superior
- **Conta Marvee**: Com acesso à API habilitado

## 📚 Documentação

- [Documentação Oficial da Marvee](https://marvee.com.br/docs)
- [Documentação do n8n](https://docs.n8n.io/)
- [Marvee Academy](https://academy.marvee.com.br)

## 🤝 Suporte

Encontrou algum problema ou tem alguma sugestão? Entre em contato:

- **Email**: suporte@marvee.com.br
- **Issues**: [GitHub Issues](https://github.com/Marvee-tecnologia/n8n-marvee-node/issues)

## 🌐 Conecte-se conosco

<p align="center">
  <a href="https://www.linkedin.com/company/marveeoficial/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
  <a href="https://www.instagram.com/marvee.oficial/" target="_blank"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram"></a>
  <a href="https://www.youtube.com/@marvee.oficial" target="_blank"><img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube"></a>
</p>

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.

---

<p align="center">
  <strong>Desenvolvido com ❤️ pela equipe Marvee</strong><br>
  © 2020-2024 Marvee. Todos os direitos reservados.
</p>
