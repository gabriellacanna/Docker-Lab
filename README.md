# 🐳 Docker Lab - Aplicação Web Completa

Um exemplo prático de como usar Docker para executar uma aplicação web completa com frontend React e backend Flask.

## 📋 O que tem neste projeto?

- **Frontend**: Aplicação React servida com Nginx
- **Backend**: API Flask (Python) 
- **Banco**: Redis (cache/banco de dados)
- **Orquestração**: Docker Compose para conectar tudo

## 🚀 Como rodar (FORMA MAIS FÁCIL)

### Pré-requisitos
- Docker instalado na sua máquina
- Docker Compose instalado

### Passo a passo

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd Docker-Lab-1
   ```

2. **Rode TUDO com um comando só**
   ```bash
   docker-compose up --build
   ```

3. **Acesse as aplicações**
   - **Frontend**: http://localhost:3000
   - **Backend**: http://localhost:5000/api

4. **Para parar tudo**
   ```bash
   # Ctrl+C no terminal ou
   docker-compose down
   ```

## 🔧 Como rodar individualmente (FORMA MANUAL)

### Backend (Flask)

```bash
# 1. Entrar na pasta do backend
cd backend

# 2. Construir a imagem
docker build -t meu-backend .

# 3. Rodar o container
docker run -p 5000:5000 --name backend meu-backend

# 4. Testar
curl http://localhost:5000/api
```

### Frontend (React + Nginx)

```bash
# 1. Entrar na pasta do frontend
cd frontend

# 2. Construir a imagem
docker build -t meu-frontend .

# 3. Rodar o container
docker run -d -p 3000:80 --name frontend meu-frontend

# 4. Acessar no navegador
# http://localhost:3000
```

## 📁 Estrutura do Projeto

```
Docker-Lab-1/
├── docker-compose.yml          # Orquestra todos os containers
├── backend/
│   ├── Dockerfile             # Como construir o backend
│   ├── main.py               # API Flask
│   └── requirements.txt      # Dependências Python
└── frontend/
    ├── Dockerfile            # Como construir o frontend  
    ├── nginx.conf           # Configuração do servidor web
    ├── package.json         # Dependências React
    ├── public/
    │   └── index.html       # Página HTML principal
    └── src/
        ├── App.js           # Componente React principal
        └── index.js         # Ponto de entrada React
```

## 🎯 O que cada Dockerfile faz?

### Backend Dockerfile
1. Pega uma imagem Python
2. Instala as dependências (Flask)
3. Copia o código da API
4. Expõe a porta 5000
5. Roda o servidor Flask

### Frontend Dockerfile
1. **Etapa 1**: Constrói a aplicação React
2. **Etapa 2**: Serve os arquivos com Nginx
3. Expõe a porta 80

## 🐛 Comandos úteis para debug

```bash
# Ver containers rodando
docker ps

# Ver logs de um container
docker logs <nome-do-container>

# Entrar dentro de um container
docker exec -it <nome-do-container> sh

# Parar um container
docker stop <nome-do-container>

# Remover um container
docker rm <nome-do-container>

# Ver todas as imagens
docker images

# Limpar containers parados
docker container prune
```

## ❓ Problemas comuns

### "Porta já está em uso"
```bash
# Mate o processo que está usando a porta
sudo lsof -i :3000
sudo kill -9 <PID>
```

### "Container já existe"
```bash
# Remove o container antigo
docker rm frontend
docker rm backend
```

### "Não consegue acessar no navegador"
- Verifique se o mapeamento de portas está correto: `-p 3000:80`
- Teste se o container está rodando: `docker ps`
- Verifique os logs: `docker logs frontend`