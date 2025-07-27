# 📊 Simple Analytics API

A lightweight, privacy-first backend service built with **NestJS**, **Fastify**, and **MongoDB** for tracking website page visits and generating traffic insights. Ideal for personal sites, bots, and landing pages that need self-hosted analytics without third-party tracking tools.

---

## 🚀 Features

- 🔍 Track page views with POST requests
- 📅 Daily visit statistics
- 🌐 Referrer source analytics
- 🧭 Browser usage breakdown
- ⚡ Built on high-performance **Fastify**
- 📚 Fully documented with Swagger (OpenAPI)
- 🔒 Input validation and schema enforcement with `class-validator`

---

## 🛠️ Tech Stack

| Layer      | Tech                        |
| ---------- | --------------------------- |
| Framework  | NestJS + Fastify adapter    |
| DB         | MongoDB with Mongoose       |
| Validation | class-validator + DTOs      |
| Docs       | Swagger (`@nestjs/swagger`) |
| Dev Tools  | Nodemon, VS Code            |

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/AbduboriyAhmadjonov/simple-analytics-api.git
cd simple-analytics-api

# Install dependencies
npm install
```

# ▶️ Usage

## Start in dev mode

```bash
npm run dev
```

## Or start in production

```bash
npm run build
npm run prod
```

By default, the API runs on `http://localhost:3000`

---

# 🌍 Endpoints

#### POST `/track` — Record a page visit

```json
{
  "url": "https://your-site.com/about",
  "referrer": "https://t.me/yourchannel",
  "browser": "Chrome"
}
```

#### GET `/summary/daily` — Daily visits (past 7 days)

```json
[
  { "date": "2025-07-20", "visits": 22 },
  ...
]
```

#### GET `/summary/top-referrers` — Top traffic sources

```json
[
{ "referrer": "https://t.me/yourbot", "count": 55 },
...
]
```

#### GET /summary/browser-usage — Browser stats

```json
[
{ "browser": "Firefox", "count": 32 },
...
]
```

#### DELETE `/visits` — Wipe data (dev only)

---

# 🧠 Data Model

```ts
Visit {
  url: string;
  referrer?: string;
  browser: string;
  timestamp: Date; // auto-assigned
}
```

---

# 🔐 Environment Variables

Copy `.env.example` and rename it to .env:

```bash
cp .env.example .env
```

```env
MONGODB_URI=mongodb://localhost:27017/analytics
PORT=3000
```

---

# 📁 Project Structure

```lua
src/
├── main.ts               -- Main file
├── app.module.ts
├── app.service.ts
├── app.controller.ts
├── config/               -- Config file (for .env)
│ ├── config.module.ts
│ ├── config.service.ts
├── visits/               -- Endpoints
│ ├── visits.module.ts
│ ├── visits.controller.ts
│ ├── visits.service.ts
│ ├── dto/                -- DTO
│ │ └── create-visit.dto.ts
│ ├── schemas/            -- Mongoose Schema
│ │ └── visit.schema.ts
```

---

# 📚 Swagger Docs

API documentation is available at:

```bash
http://localhost:3000/api
```

Uses NestJS Swagger decorators for automatic OpenAPI generation.
