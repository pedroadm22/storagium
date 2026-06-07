# Storagium 📦

[![Docker Support](https://img.shields.io/badge/Docker-enabled-blue?logo=docker&logoColor=white)](https://www.docker.com/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Python](https://img.shields.io/badge/Python-3.11+-3776AB?logo=python&logoColor=white)](https://www.python.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**Storagium** is a modern and robust web platform designed for smart inventory management and stock control tailored for retail and commercial stores. Inspired by the efficiency, organization, and standardization of **cargo shipping containers**, Storagium translates global port logistics logic into the digital retail ecosystem, allowing businesses to track, store, and move merchandise with maximum precision.

---

## 🎯 About the Project

Managing stock manually or through legacy systems frequently results in financial losses, inventory discrepancies, and operational bottlenecks. Storagium addresses this challenge by centralizing an entire store's logistical operations within a clean, modular, and highly responsive interface.

Every product batch operates like a virtual container: it features a unique identifier, a specific location tracking path, an immutable movement history, and real-time capacity metrics.

---

## ✨ Key Features

* **📦 Structured Stock Management:** Detailed product registration supporting variations (SKU, colors, sizes), smart categorization, and batch control.
* **⚡ Real-Time Stock Movements:** Swift Check-in (Inbound), Check-out (Outbound), and Internal Transfer operations with instantaneous dashboard updates.
* **⚠️ Low Stock Alerts:** Automated visual notifications triggered as soon as an item hits its operational safety threshold.
* **📊 Capacity & Occupancy Dashboard:** An analytical panel graphically rendering occupied storage capacity, fast-moving products, and financial stock health metrics.
* **🕵️ Traceability & Audit Logs:** Comprehensive audit trails detailing *who*, *when*, and *what* was modified or moved within the inventory.
* **🐳 Containerized Architecture:** Production and development ready utilizing Docker, ensuring environmental parity and frictionless deployment.

---

## 🛠️ Tech Stack

Storagium's architecture is strategically decoupled to guarantee scalability, performance, and maintainability:

### Frontend
* **ReactJS** (v18+) with **TypeScript** for component-driven UI and strict type safety.
* **Tailwind CSS** for rapid utility-first, fully responsive styling.
* **Lucide React** for a clean, minimalist icon ecosystem.

### Backend & API
* **Python** with **FastAPI** powering an asynchronous, high-performance backend with automated interactive documentation via Swagger/OpenAPI.
* **SQLAlchemy** acting as the ORM layer for seamless and efficient data mapping and manipulation.

### Database & Infrastructure
* **PostgreSQL** serving as the primary relational database
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->
 for robust inventory data persistence.
* **Docker & Docker Compose** for multi-container orchestration, dependency isolation, and rapid environment setup.

---

## 🚀 Getting Started

### Prerequisites
Before you begin, ensure you have the following tools installed on your local machine:
* [Git](https://git-scm.com/)
* [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)

### 🛠️ Cloning the Repository

```bash
# Clone the repository
git clone [https://github.com/your-username/storagium.git](https://github.com/your-username/storagium.git)

# Navigate into the project folder
cd storagium