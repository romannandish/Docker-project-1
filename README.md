# 🚀 MERN DevOps CI/CD Pipeline

This project demonstrates a complete DevOps pipeline for a MERN stack application using Docker, GitHub Actions, Jenkins, and AWS.

---

## 🧱 Application Layer

- MERN Stack Application
- Node.js + Express Backend
- React Frontend

---

## 🐳 Containerization

Docker is used to containerize the application.

Features:

- Backend Dockerfile
- Frontend Dockerfile (multi-stage build)
- .dockerignore
- Version tagging (v1, latest)
- Images pushed to Docker Hub

---

## ⚙️ Continuous Integration (CI)

CI is implemented using GitHub Actions.

Pipeline Steps:

1. Lint code
2. Run tests
3. Build Docker images
4. Push Docker images to Docker Hub
5. Trigger Jenkins using webhook

---

## 🔧 Continuous Deployment (CD)

CD is implemented using Jenkins running on AWS EC2.

Setup:

- Jenkins running inside Docker
- Installed plugins (Docker, Git, Kubernetes)
- Configured credentials
- Connected GitHub webhook

Pipeline Steps:

1. Pull latest code
2. Pull Docker image
3. Deploy container

---

## ☁️ Infrastructure

- AWS EC2
- Jenkins
- Docker
- GitHub

---

## 🛠 Tech Stack

- React
- Node.js
- Express
- MongoDB
- Docker
- GitHub Actions
- Jenkins
- AWS EC2
