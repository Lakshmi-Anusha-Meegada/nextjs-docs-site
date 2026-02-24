# 📚 Next.js Multi-Language Documentation Portal

A high-performance documentation portal built using *Next.js (App Router)* with support for:

- 🌍 Internationalization (i18n)
- ⚡ Incremental Static Regeneration (ISR)
- 🐳 Docker containerization
- 🔍 Full-text search
- 🌙 Dark / Light theme
- 📦 Versioned documentation (v1, v2, v3)
- 📑 Swagger API Reference
- 📋 Copy-to-clipboard code blocks
- 💬 Feedback widget

---

## 🚀 Objective

This project demonstrates modern web architecture using:

- Static Site Generation (SSG)
- Incremental Static Regeneration (ISR)
- Locale-based routing
- Containerized deployment with Docker

---

## 🌍 Internationalization (i18n)

Supported languages:

- English (en)
- Spanish (es)
- French (fr)
- German (de)

Example routes:

    /en/docs/v1/introduction 
    /es/docs/v1/introduction 
    /fr/docs/v1/introduction 
    /de/docs/v1/introduction

---

## ⚡ Incremental Static Regeneration (ISR)

All documentation pages use:

```js
export const revalidate = 60;

This ensures pages are regenerated every 60 seconds.

```
## Versioned Documentation

Users can switch between:

- v1  
- v2  
- v3  

Using the version selector in the header.

## 🔍 Full-Text Search

Client-side search allows users to search across all documentation content.

## 🌙 Theme Support

- Automatic system theme detection
- Light / Dark toggle
- Preference stored in localStorage


## 📑 API Reference

Interactive Swagger documentation available at:

/api-reference

Rendered using *swagger-ui-react* from:

public/openapi.json


## 🐳 Docker Setup

Build and run using Docker:

bash
docker-compose up --build

Application runs at:

http://localhost:3000


## 💻 Local Development

Install dependencies:

npm install

Run development server:

npm run dev

## 📂 Project Structure

_docs/                    → Markdown documentation content  
public/openapi.json       → OpenAPI 3.0 specification  
src/app/                  → App Router pages  
src/components/           → UI components  
docker-compose.yml  
Dockerfile  
.env.example


## 📦 Environment Variables

All required environment variables are documented in:

.env.example

## ✅ Core Requirements Implemented

✔ Docker containerization
✔ ISR (60 seconds revalidation)
✔ Multi-language routing (en, es, fr, de)
✔ Version selector (v1, v2, v3)
✔ Dark/Light theme toggle
✔ Full-text search
✔ Swagger API reference page
✔ Feedback widget
✔ Copy-to-clipboard code blocks

## 📜 License

This project was built for educational and evaluation purposes.

## ✅ After Pasting

Run:

bash
git add .
git commit -m "Final README update"
git push
