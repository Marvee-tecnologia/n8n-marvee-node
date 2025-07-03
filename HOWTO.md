# Guia: Como Rodar Nós Customizados no n8n

Este guia explica como configurar e usar nós customizados no n8n para desenvolvimento local.

## Pré-requisitos

- n8n instalado globalmente (`npm install -g n8n`)
- Node.js e npm configurados
- Projeto do nó customizado já existente

## Passo 1: Build e Link do Projeto do Nó Customizado

### 1.1 Navegue até o diretório do projeto do nó customizado

```bash
cd /caminho/para/n8n-marvee-node
```

### 1.2 Faça o build do projeto

```bash
npm run build
```

### 1.3 Crie um link simbólico global do pacote

```bash
npm link
```

## Passo 2: Configuração no Diretório do n8n

### 2.1 Navegue para o diretório do n8n

```bash
cd ~/.n8n
```

### 2.2 Link o nó customizado no n8n

```bash
npm link @marvee-tecnologia/n8n-nodes-marvee
```

## Passo 3: Iniciar o n8n

Após fazer o link, inicie o n8n:

```bash
n8n start
```

O seu nó customizado agora deve aparecer na lista de nós disponíveis no n8n.

## Workflow de Desenvolvimento

### Para fazer alterações no nó customizado:

1. **Faça suas modificações** no código do nó customizado
2. **Rebuild o projeto:**
   ```bash
   npm run build
   ```
3. **Reinicie o n8n:**
   ```bash
   n8n start
   ```

### Comando combinado para agilizar o desenvolvimento:

```bash
npm run build && n8n start
```

Execute este comando no diretório do projeto do nó customizado sempre que fizer alterações.

## Estrutura de Diretórios

```
~/.n8n/
├── node_modules/
│   └── @marvee-tecnologia/
│       └── n8n-nodes-marvee/ (link simbólico)
└── ...

/n8n-marvee-node/
├── src/
├── package.json
├── dist/ (gerado após build)
└── ...
```

## Troubleshooting

### Problema: Nó não aparece no n8n

- Verifique se o build foi executado com sucesso
- Confirme se o `npm link` foi executado corretamente em ambos os diretórios
- Reinicie completamente o n8n

### Problema: Alterações não são refletidas

- Sempre execute `npm run build` após fazer alterações
- Reinicie o n8n completamente (pare e inicie novamente)

### Problema: Erro de dependências

- Verifique se todas as dependências estão instaladas no projeto do nó customizado
- Execute `npm install` no projeto do nó customizado se necessário

## Dicas Importantes

1. **Sempre faça o build** antes de testar alterações
2. **Reinicie o n8n** após cada alteração para garantir que as mudanças sejam carregadas
3. **Use o comando combinado** `npm run build && n8n start` para agilizar o desenvolvimento
4. **Verifique os logs** do n8n para identificar possíveis erros durante o carregamento do nó

## Comando Rápido para Desenvolvimento

Para um workflow mais eficiente, você pode criar um script no `package.json` do seu projeto:

```json
{
	"scripts": {
		"dev": "npm run build && n8n start"
	}
}
```

Assim você pode simplesmente executar:

```bash
npm run dev
```

---

Com este setup, você terá um ambiente de desenvolvimento eficiente para nós customizados do n8n!
