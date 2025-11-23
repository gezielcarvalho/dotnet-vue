# Dotnet-Vue Quasar SSR App

This project is a full-stack web application featuring a **Quasar SSR (Server-Side Rendering) Vue 3 frontend** and a **.NET 8 minimal API backend**. The frontend uses **Tailwind CSS** for styling and communicates with the backend via a proxy/API layer.

---

## 🚀 Technologies Used

### Frontend

- [Quasar Framework (Vue 3, SSR, Vite)](https://quasar.dev/)
- [Vue Router](https://router.vuejs.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Pinia](https://pinia.vuejs.org/) - State Management
- [Vite](https://vitejs.dev/)

### Backend

- [.NET 8 Minimal API](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/minimal-apis)
- ASP.NET Core Controllers
- Swagger/OpenAPI

### DevOps & Infrastructure

- Docker & Docker Compose
- Kubernetes (K8s)
- Docker Swarm support

---

## 📋 Table of Contents

- [Quick Start with Docker](#-quick-start-with-docker)
- [Local Development Setup](#-local-development-setup)
- [Docker Deployment](#-docker-deployment)
- [Kubernetes Deployment](#-kubernetes-deployment)
- [Project Structure](#-project-structure)
- [API Endpoints](#-api-endpoints)
- [Environment Variables](#-environment-variables)
- [License](#-license)

---

## 🐳 Quick Start with Docker

The easiest way to run this application is using Docker Compose:

```bash
# Clone the repository
git clone https://github.com/gezielcarvalho/dotnet-vue.git
cd dotnet-vue

# Run with Docker Compose (Production)
cd docker
docker compose up -d

# Access the application
# Frontend: http://localhost:3000
# Backend API: http://localhost:5084
# Swagger UI: http://localhost:5084/swagger
```

**For Development with Hot Reload:**

```bash
cd docker
docker compose -f docker-compose.dev.yml up
```

---

## 💻 Local Development Setup

### Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js 18+](https://nodejs.org/) (recommended: v20 or v22)
- npm or yarn

### 1. Clone the Repository

```bash
git clone https://github.com/gezielcarvalho/dotnet-vue.git
cd dotnet-vue
```

### 2. Backend Setup (.NET Minimal API)

```bash
cd backend
dotnet restore
dotnet run
```

The backend will start on `http://localhost:5084`

- **Swagger UI**: http://localhost:5084/swagger
- **Health Check**: http://localhost:5084/api/home/health

### 3. Frontend Setup (Quasar SSR + Tailwind)

```bash
cd frontend
npm install
npm run dev
```

The frontend dev server will start on `http://localhost:9000`

---

## 🐋 Docker Deployment

### Building Docker Images

**Backend:**

```bash
docker build -f docker/backend.Dockerfile -t dotnet-vue-backend:latest ./backend
```

**Frontend:**

```bash
docker build -f frontend/Dockerfile -t dotnet-vue-frontend:latest ./frontend
```

### Docker Compose Options

#### Production Mode

```bash
cd docker
docker compose up -d
```

Features:

- Optimized production builds
- Health checks enabled
- Automatic restart policies
- Named network for service communication

#### Development Mode

```bash
cd docker
docker compose -f docker-compose.dev.yml up
```

Features:

- Hot reload for both frontend and backend
- Volume mounts for live code changes
- Development environment variables
- Persistent node_modules and NuGet packages

### Individual Container Commands

```bash
# Run backend only
docker run -d -p 5084:5084 --name backend dotnet-vue-backend:latest

# Run frontend only
docker run -d -p 3000:3000 --name frontend \
  -e VITE_API_HOST=http://localhost \
  -e VITE_API_PORT=5084 \
  dotnet-vue-frontend:latest
```

---

## ☸️ Kubernetes Deployment

### Prerequisites

- Kubernetes cluster (local: minikube, kind, or cloud: AKS, EKS, GKE)
- kubectl configured

### Deploy to Kubernetes

```bash
# Apply all resources
kubectl apply -f k8s/deployment.yml

# Check deployment status
kubectl get deployments
kubectl get pods
kubectl get services

# Access the application
# Get the external IP (if LoadBalancer is available)
kubectl get service dotnet-vue-frontend
```

### Update Container Images

Before deploying, update the image references in `k8s/deployment.yml`:

```yaml
# Replace with your container registry
image: your-registry/dotnet-vue-backend:latest
image: your-registry/dotnet-vue-frontend:latest
```

### Scale Deployments

```bash
# Scale frontend
kubectl scale deployment dotnet-vue-frontend --replicas=3

# Scale backend
kubectl scale deployment dotnet-vue-backend --replicas=3
```

### View Logs

```bash
# Backend logs
kubectl logs -l app=dotnet-vue-backend -f

# Frontend logs
kubectl logs -l app=dotnet-vue-frontend -f
```

---

## 📁 Project Structure

```
dotnet-vue/
├── backend/                    # .NET 8 Backend
│   ├── Controllers/           # API Controllers
│   │   ├── AuthController.cs
│   │   └── HomeController.cs
│   ├── Program.cs            # Application entry point
│   ├── backend.csproj        # Project file
│   └── appsettings.json      # Configuration
├── frontend/                  # Quasar Vue 3 Frontend
│   ├── src/
│   │   ├── pages/           # Vue pages/views
│   │   ├── components/      # Reusable components
│   │   ├── router/          # Vue Router config
│   │   ├── stores/          # Pinia stores
│   │   └── services/        # API services
│   ├── quasar.config.ts     # Quasar configuration
│   └── package.json         # Dependencies
├── docker/                    # Docker configuration
│   ├── backend.Dockerfile
│   ├── docker-compose.yml   # Production compose
│   └── docker-compose.dev.yml # Development compose
└── k8s/                       # Kubernetes manifests
    ├── deployment.yml       # Deployments & Services
    └── swarm.yml           # Docker Swarm config
```

---

## 🔌 API Endpoints

### Health Check

```
GET /api/home/health
```

Response:

```json
{
  "message": "Service is healthy",
  "timestamp": "2025-11-23T10:30:00Z",
  "instanceId": "abc123"
}
```

### Authentication

```
POST /api/auth/login
Content-Type: application/json

{
  "username": "user",
  "password": "password"
}
```

---

## 🌐 Environment Variables

### Backend

| Variable                 | Default         | Description                          |
| ------------------------ | --------------- | ------------------------------------ |
| `ASPNETCORE_ENVIRONMENT` | `Production`    | Environment (Development/Production) |
| `ASPNETCORE_URLS`        | `http://+:5084` | Server binding URL                   |

### Frontend

| Variable        | Default          | Description      |
| --------------- | ---------------- | ---------------- |
| `NODE_ENV`      | `production`     | Node environment |
| `VITE_API_HOST` | `http://backend` | Backend API host |
| `VITE_API_PORT` | `5084`           | Backend API port |
| `VITE_SSR_PORT` | `3000`           | SSR server port  |

---

## 🛠️ Development Tips

- **CORS:** Backend is configured to allow requests from frontend dev server (`localhost:9000`)
- **Hot Reload:** Both frontend and backend support hot reload during development
- **Proxy:** SSR middleware handles API proxying in development
- **Tailwind:** Uses Tailwind v4 with PostCSS integration
- **Type Safety:** TypeScript enabled across the frontend

---

## 📝 Notes

### Docker

- Multi-stage builds for optimized image sizes
- Health checks ensure service reliability
- Non-root user in production containers for security
- `.dockerignore` files exclude unnecessary files

### Kubernetes

- Resource limits and requests defined
- Liveness and readiness probes configured
- LoadBalancer service for frontend access
- ClusterIP service for backend (internal)

### Production Considerations

- Configure HTTPS/TLS in production
- Use environment-specific configuration files
- Set up proper logging and monitoring
- Configure reverse proxy (Nginx/Traefik) if needed
- Use secrets management for sensitive data

---

## 📄 License

MIT License - feel free to use this project for learning and production purposes.

---

**Happy coding! 🚀**
