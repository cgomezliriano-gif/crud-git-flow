# CRUD de Items - Tarea 3 (Programacion III)

API REST + interfaz web simple para gestionar items (nombre y descripcion), desarrollada con
Node.js y Express siguiendo el flujo de trabajo **Git Flow**.

## Ejecutar

```bash
npm install
npm start
```

Abrir http://localhost:3000

## Endpoints

| Metodo | Ruta             | Descripcion         |
|--------|------------------|---------------------|
| POST   | /api/items       | Crear item          |
| GET    | /api/items       | Listar items        |
| GET    | /api/items/:id   | Obtener un item     |
| PUT    | /api/items/:id   | Actualizar item     |
| DELETE | /api/items/:id   | Eliminar item       |

## Flujo de ramas

Ramas permanentes: `main`, `dev`, `qa`.
Ramas de trabajo: `feature/create-item`, `feature/read-items`, `feature/update-item`,
`feature/delete-item`, `hotfix/fix-validation`.

Cada rama de trabajo se integro con 3 Pull Requests: hacia `dev`, hacia `qa` y hacia `main`.
