# Dotnet-Vue Quasar SSR App

This project is a full-stack web application featuring a **Quasar SSR (Server-Side Rendering) Vue 3 frontend** and a **.NET 8 minimal API backend**. The frontend uses **Tailwind CSS** for styling and communicates with the backend via a proxy/API layer.

---

## Technologies Used

- [Quasar Framework (Vue 3, SSR, Vite)](https://quasar.dev/)
- [Vue Router](https://router.vuejs.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [.NET 8 Minimal API](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/minimal-apis)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [ESLint & Prettier](https://eslint.org/) for code quality and formatting

---

## Minimal Setup (Linux)

### 1. **Clone the repository**

```sh
git clone https://github.com/your-username/dotnet-vue.git
cd dotnet-vue
```

### 2. **Backend (.NET Minimal API)**

```sh
cd backend
dotnet restore
dotnet run
```

The backend will start on `http://localhost:5084` (or as configured).

### 3. **Frontend (Quasar SSR + Tailwind)**

```sh
cd ../frontend
npm install
npm run dev
```

The frontend will start on `http://localhost:9000` (or as configured).

---

## Notes

- **CORS:** The backend is configured to allow requests from the frontend dev server.
- **Proxy:** For production, configure a reverse proxy (e.g., Nginx) or use Quasar’s SSR proxy features.
- **Tailwind:** Uses the latest Tailwind v4 with Quasar and Vite integration.
- **Hot Reload:** Both frontend and backend support hot reload for rapid development.

---

## License

MIT

---

**Happy coding!**
