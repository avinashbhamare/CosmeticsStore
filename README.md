# 💄 Avinash Cosmetics (Full Stack E‑commerce Application)

A complete cosmetics selling platform built with **Spring Boot** (backend), **React** (frontend), and **MySQL** (database).  
Includes user authentication, product browsing, shopping cart, order management, and an admin panel.

---

## ✨ Features

- **User Authentication** – Register / Login with JWT (or disabled security for simplicity)
- **Product Management** – Browse products by category (Skincare, Makeup, Hair Care, Nails)
- **Shopping Cart** – Add items, update quantities, remove products
- **Order Processing** – Place orders, reduce stock automatically, view order history
- **Admin Panel** – Add / edit / delete products, manage inventory
- **Responsive Design** – Custom CSS + Bootstrap for mobile‑friendly layout
- **RESTful APIs** – Clean separation between frontend and backend

---

## 🛠️ Tech Stack

| Layer       | Technology                                 |
|-------------|--------------------------------------------|
| **Backend** | Spring Boot 3.1.5, Spring Data JPA, Hibernate, MySQL Connector, Spring Security (optional), Maven |
| **Frontend**| React 18, React Router, Axios, Bootstrap 5, Custom CSS |
| **Database**| MySQL 8.0                                   |
| **Build**   | Maven (backend), npm (frontend)            |

---

## 📁 Project Structure
<pre>
CosmeticsStore/
├── backend/ # Spring Boot application
│ ├── src/main/java/com/cosmetics/
│ │ ├── config/ # Security beans, CORS config
│ │ ├── controller/ # REST controllers
│ │ ├── dto/ # Data transfer objects
│ │ ├── entity/ # JPA entities
│ │ ├── repository/ # JPA repositories
│ │ ├── security/ # Security configuration (optional)
│ │ └── service/ # Business logic
│ └── src/main/resources/ # application.properties
├── frontend/ # React application
│ ├── public/ # Static assets, images
│ ├── src/
│ │ ├── assets/ # Custom CSS
│ │ ├── components/ # Navbar, etc.
│ │ ├── pages/ # Home, Shop, Cart, Login, Register, Admin, etc.
│ │ ├── services/ # API client, AuthContext
│ │ └── App.js
│ └── package.json
└── README.md

</pre>
## 🚀 Getting Started

### Prerequisites

- Java 17 or later  
- Node.js (v16+) and npm  
- MySQL (8.0+)  
- Maven  

---

### 1. Clone the repository

<pre>
git clone https://github.com/avinashbhamare/CosmeticsStore.git
cd CosmeticsStore
</pre>


### 2. Set up the database

Start MySQL and create a database:
<pre>CREATE DATABASE cosmetics_db;</pre>

### 3. Configure the backend

Edit:
backend/src/main/resources/application.properties
<pre>
spring.datasource.url=jdbc:mysql://localhost:3306/cosmetics_db
spring.datasource.username=root
spring.datasource.password=kiit
spring.jpa.hibernate.ddl-auto=update
  </pre>

### 4. Run the backend
cd backend
mvn spring-boot:run

Backend runs at:
http://localhost:8080

### 5. Run the frontend

Open another terminal:
<pre>
cd frontend
npm install
npm start
</pre>

Frontend runs at:
http://localhost:3000

### 6. Login credentials

Admin user:
Email: admin@cosmetics.com
Password: admin123

Regular user:
Register using frontend

### 🔧 Troubleshooting

Backend fails to start
→ Check MySQL username password

Frontend cannot fetch products
→ Backend must run on port 8080

403 error on /api/products
→ Disable security config

### 👨‍💻 Author
<pre>
Name:Avinash Sahebrao Bhamare
Roll Number: 23051980
</pre>
