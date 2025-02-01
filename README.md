# Inventory Management System

A simple inventory management application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application allows admins to manage product information and clients to view the inventory with search functionality.


## Demo

Click the link below to see the demonstration of the Inventory Management System.

Link 👉 https://drive.google.com/file/d/1BNzDI0VLPEHEvQEXQS1YqIGkO78SArGh/view?usp=sharing 👈


## Features

### Admin
- Add Product: Create new products with a name, image, quantity, category, and price.
- Edit Product: Update the details of an existing product.
- Delete Product: Remove products from the inventory.
- View Orders: View the details of all orders placed from the client side.
- Download Order Details: Download the details of the orders as pdf.

### Client
- View Products: Display all available products.
- Search Products: Filter products by name, category, and price.
- Add Product to the Cart: Add any product you want to the cart.
- Remove Product from the Cart: Remove any product from the card as needed.
- Download Order Details: Place an order by providing name, contact number, address, and the details provided can be downloaded as a pdf if needed.


## Technologies Used

### Frontend
- React with Vite
- Tailwind CSS for styling
- Axios for API calls
- React Hot Toast for notifications

### Backend
- Node.js with Express.js
- MongoDB for the database
- Multer for handling image uploads
- dotenv for environment variables


## Installation

Clone the repository and navigate to each project folder to install dependencies.
```bash
  git clone https://github.com/YourUsername/Inventory-Management-System.git
  cd Inventory-Management-System
```
#### Folder Setup
The project is divided into three main folders: admin, client, and server. You will need to install dependencies for each.
- Navigate to each folder (admin, client, server) and run.
```bash
npm install
```
#### Environment Variables
Before running the app, configure the .env file in the server folder with the necessary environment variables.
- Create a .env file in the server folder.
- Replace placeholders with your actual values:
```bash
PORT = 3000
MONGO_URI = Enter your mongodb uri
```
#### Run the Project.
- Start the backend server
```bash
cd server
npm start
```
- Start the admin
```bash
cd ../admin
npm run dev
```
- Start the client frontend
```bash
cd ../client
npm run dev
```


## Usage
1. Admin
- Navigate to the Admin Dashboard (http://localhost:5173).
2. Client
- Open the Client Interface (http://localhost:5174).


## Screenshots

![image alt](https://github.com/MrTharinduDasantha/Inventory-Management-System/blob/fe953d03bdc51c85b13a3fa574537fab09912c69/Img%20-%201.png)
![image alt](https://github.com/MrTharinduDasantha/Inventory-Management-System/blob/fe953d03bdc51c85b13a3fa574537fab09912c69/Img%20-%202.png)
![image alt](https://github.com/MrTharinduDasantha/Inventory-Management-System/blob/fe953d03bdc51c85b13a3fa574537fab09912c69/Img%20-%203.png)
![image alt](https://github.com/MrTharinduDasantha/Inventory-Management-System/blob/fe953d03bdc51c85b13a3fa574537fab09912c69/Img%20-%204.png)
![image alt](https://github.com/MrTharinduDasantha/Inventory-Management-System/blob/fe953d03bdc51c85b13a3fa574537fab09912c69/Img%20-%205.png)
![image alt](https://github.com/MrTharinduDasantha/Inventory-Management-System/blob/fe953d03bdc51c85b13a3fa574537fab09912c69/Img%20-%206.png)
![image alt](https://github.com/MrTharinduDasantha/Inventory-Management-System/blob/fe953d03bdc51c85b13a3fa574537fab09912c69/Img%20-%207.png)
![image alt](https://github.com/MrTharinduDasantha/Inventory-Management-System/blob/fe953d03bdc51c85b13a3fa574537fab09912c69/Img%20-%208.png)
![image alt](https://github.com/MrTharinduDasantha/Inventory-Management-System/blob/fe953d03bdc51c85b13a3fa574537fab09912c69/Img%20-%209.png)
![image alt](https://github.com/MrTharinduDasantha/Inventory-Management-System/blob/fe953d03bdc51c85b13a3fa574537fab09912c69/Img%20-%2010.png)
![image alt](https://github.com/MrTharinduDasantha/Inventory-Management-System/blob/fe953d03bdc51c85b13a3fa574537fab09912c69/Img%20-%2011.png)
![image alt](https://github.com/MrTharinduDasantha/Inventory-Management-System/blob/fe953d03bdc51c85b13a3fa574537fab09912c69/Img%20-%2013.png)

<h4 align="center"> Don't forget to leave a star ⭐️ </h4>
