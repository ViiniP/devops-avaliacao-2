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