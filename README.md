# Projeto DevOps - Avaliação II

##  Requisitos
- Docker e Docker Compose instalados
- Repositório clonado em sua máquina
- Estrutura do projeto com 3 pastas:
  - `/api` → Backend em NestJS
  - `/front` → Frontend
  - `/deploy` → Arquivos de orquestração e deploy

---

## Como executar via Compose
Para subir os containers:
```bash
docker-compose up -d
```
---

## Endpoints CRUD (exemplo da API Events)
- `GET /events` → Lista todos os eventos
- `GET /events/:id` → Retorna um evento específico
- `POST /events` → Cria um novo evento
- `PUT /events/:id` → Atualiza um evento existente
- `DELETE /events/:id` → Remove um evento

---

## Exemplos de Resposta

### Exemplo de requisição `POST /events`
```json
{
  "title": "Workshop DevOps",
  "starts_at": "2025-09-20T09:00:00Z",
  "ends_at": "2025-09-20T12:00:00Z",
  "location": "Auditório Principal"
}
```

### Exemplo de resposta
```json
{
  "id": 1,
  "title": "Workshop DevOps",
  "starts_at": "2025-09-20T09:00:00Z",
  "ends_at": "2025-09-20T12:00:00Z",
  "location": "Auditório Principal"
}
```

---

## Instruções para derrubar os recursos
Para encerrar todos os containers:
```bash
docker-compose down
```

Para encerrar e remover volumes (caso necessário):
```bash
docker-compose down -v
```