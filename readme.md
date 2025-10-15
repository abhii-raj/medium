
# Medium Clone

A full-stack **Medium-style blogging platform** built with **React**, **Hono**, **PostgreSQL**, and **Prisma**.  
This project showcases scalable architecture, clean code practices, and deployment-ready configurations using **Vercel** and **Cloudflare Workers**.

---

## 🧩 Overview

The Medium Clone allows users to create, publish, and read blog posts in a clean, minimal, and responsive interface.  
It demonstrates production-grade backend integration, type-safe communication between frontend and backend, and modern full-stack deployment workflows.

---

## ⚙️ Tech Stack

**Frontend:**
- React (Vite)
- TypeScript
- Tailwind CSS  
- Hosted on **Vercel**

**Backend:**
- Hono (Cloudflare Workers)
- Prisma ORM with Accelerate
- PostgreSQL Database
- JWT Authentication
- Hosted on **Cloudflare**

**Shared:**
- A **common package** is used to share TypeScript types between the frontend and backend, published privately using `.npmignore`.

---

## 🌟 Features

- 🔐 **JWT-based Authentication** — secure user sessions with Hono and Prisma  
- 📰 **Create, Read, and Edit Posts** — core CRUD functionality for blog articles  
- ⚡ **Shared Type Definitions** — consistent data models across frontend and backend  
- 🧱 **Prisma Accelerate Integration** — optimized database access for production  
- 🌐 **Deployed Frontend & Backend** — separated deployments for scalability  
- 🧹 **Clean, Modular Architecture** — maintainable, type-safe, and developer-friendly

---

## 📁 Project Structure

```

medium-main/
│
├── frontend/               # React + Vite application (Vercel)
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/                # Hono + Prisma + PostgreSQL backend (Cloudflare)
│   ├── src/
│   ├── prisma/
│   └── package.json
│
├── common/                 # Shared TypeScript definitions
│   ├── index.ts
│   └── package.json
│
└── README.md

````

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/medium-main.git
cd medium-main
````

### 2. Install Dependencies

Install all dependencies in root and subdirectories:

```bash
cd backend && npm install
cd ../frontend && npm install
cd ../common && npm install
```

### 3. Set Up Environment Variables

**Backend (.env):**

```
DATABASE_URL="postgresql://user:password@localhost:5432/medium_clone"
JWT_SECRET="your_secret_key"
```

### 4. Run Database Migrations

```bash
cd backend
npx prisma migrate dev
```

### 5. Run Locally

**Backend:**

```bash
cd backend
npm run dev
```

**Frontend:**

```bash
cd frontend
npm run dev
```

Visit: **[http://localhost:5173](http://localhost:5173)**

---

## 🧠 Development Notes

* The **common package** ensures strict type safety between client and server.
* **Prisma Accelerate** optimizes ORM queries in serverless environments.
* **Hono** offers a fast, minimal API layer for Cloudflare Workers.
* The project follows clean separation between frontend, backend, and shared logic.

---

## 🌍 Deployment

| Service      | Purpose                       | URL                                                                                                 |
| ------------ | ----------------------------- | --------------------------------------------------------------------------------------------------- |
| **Frontend** | Vercel (React)                | [https://medium-kappa-beige.vercel.app/](  https://medium-kappa-beige.vercel.app/)  |
| **Backend**  | Cloudflare Workers (Hono API) | [ https://backend.lessggoo.workers.dev/api/v1]( https://backend.lessggoo.workers.dev/api/v1)   |

---

## 🧑‍💻 Author

**Abhishek Raj**
Built independently as a full-stack demonstration project.
Focused on modern, scalable, and type-safe web development practices.

---

## 🧾 License

This project is licensed under the [MIT License](LICENSE).

---

> *Note:* The project is still under deployment setup — replace the dummy links once live.

```

---

