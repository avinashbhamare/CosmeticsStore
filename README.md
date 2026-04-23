# 💄 Avinash Cosmetics (Full Stack E‑commerce Application)

A complete cosmetics selling platform built with **Spring Boot** (backend), **React** (frontend), and **MySQL** (database).  
Includes user authentication, product browsing, shopping cart, order management, and an admin panel.


<img width="1919" height="951" alt="Screenshot 2026-04-23 182611" src="https://github.com/user-attachments/assets/03535a8d-aa0b-446b-a0fe-3e643f4d199e" />
<img width="1919" height="443" alt="Screenshot 2026-04-23 182632" src="https://github.com/user-attachments/assets/eee31e69-b325-4235-86ab-e40cb8f9365b" />
<img width="1900" height="580" alt="Screenshot 2026-04-23 182704" src="https://github.com/user-attachments/assets/7e5aae9b-8afe-45b0-a055-139b6c16b7f0" />

<img width="1893" height="654" alt="Screenshot 2026-04-23 182648" src="https://github.com/user-attachments/assets/6507970d-7ed5-49ee-804d-721c7f00e7af" />
<img width="1916" height="524" alt="Screenshot 2026-04-23 182730" src="https://github.com/user-attachments/assets/3d0beb5c-ca30-4c41-86f0-228bbf3cf72b" />
<img width="1918" height="651" alt="Screenshot 2026-04-23 182752" src="https://github.com/user-attachments/assets/955ec9ac-3e0f-477b-a7f7-c4d66729f124" />

<img width="1916" height="663" alt="Screenshot 2026-04-23 182817" src="https://github.com/user-attachments/assets/fd689c98-52c5-46f3-bad1-a96aaa0f810d" />
<img width="1895" height="501" alt="Screenshot 2026-04-23 182853" src="https://github.com/user-attachments/assets/5a41d5ef-1f6f-4f7b-a2b6-c1eaa3f11c47" />
<img width="1918" height="854" alt="Screenshot 2026-04-23 182910" src="https://github.com/user-attachments/assets/ecfea370-fb60-4175-8dc0-a1c1229490d3" />
<img width="1919" height="868" alt="Screenshot 2026-04-23 182936" src="https://github.com/user-attachments/assets/c1069d9b-570e-4ea8-bc82-0d6372570b69" />
<img width="1892" height="575" alt="Screenshot 2026-04-23 183009" src="https://github.com/user-attachments/assets/b3f19795-83b8-4bae-bfaa-816036d91a52" />
<img width="1893" height="870" alt="Screenshot 2026-04-23 183025" src="https://github.com/user-attachments/assets/a7849944-d0a1-4511-a386-7430b43fade0" />
<img width="1897" height="815" alt="Screenshot 2026-04-23 183046" src="https://github.com/user-attachments/assets/52258909-0389-4780-850a-1acbb1f1740b" />
<img width="1891" height="705" alt="Screenshot 2026-04-23 183101" src="https://github.com/user-attachments/assets/710a6b60-142e-4a4d-a242-aef0bf05ad5d" />
<img width="1907" height="612" alt="Screenshot 2026-04-23 183116" src="https://github.com/user-attachments/assets/30a607b3-445a-4d5c-a8e3-44e08a0c96ec" />

<img width="1895" height="838" alt="Screenshot 2026-04-23 183135" src="https://github.com/user-attachments/assets/b9fc7b1c-345a-4749-b4b5-878936982d97" />

<img width="1919" height="884" alt="Screenshot 2026-04-23 183154" src="https://github.com/user-attachments/assets/a451b487-9363-4189-b976-6d8ca2318e01" />
<img width="1916" height="897" alt="Screenshot 2026-04-23 183212" src="https://github.com/user-attachments/assets/06f1c226-328e-4b9b-9764-627950a0c1d3" />
<img width="1919" height="877" alt="Screenshot 2026-04-23 183229" src="https://github.com/user-attachments/assets/f15b8d7b-0d36-436c-ae41-a7edfdfc1a8a" />
<img width="1912" height="876" alt="Screenshot 2026-04-23 183248" src="https://github.com/user-attachments/assets/f5e46b4a-dbac-46de-af12-dcaa710526a5" />




















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
