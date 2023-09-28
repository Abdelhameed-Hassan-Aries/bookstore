Ovarc Bookstore Frontend
This repository contains the frontend for the Ovarc bookstore, built as a part of the coding challenge for the Ovarc interview process.

Features
A Shop page that lists books, showcasing their cover, title, author, and availability in various stores.
An Authors page that lists authors with the ability to edit their names in-line, delete them, or add new authors through a modal.
A Books page that presents a list of books, their number of pages, and their authors. Book titles are editable in-line.
A Stores page that lists all the stores and each row acts as a CTA leading to the respective store's inventory page.
A Store Inventory page where the admin can add more books to the store's inventory, view them in a list, or group them by author.
Getting Started
Prerequisites
Node.js
npm/Yarn
Docker (Optional but recommended)
Installation
Clone this repository:

bash
Copy code
git clone https://github.com/your-username/ovarc-bookstore-frontend.git
cd ovarc-bookstore-frontend
Install dependencies:

bash
Copy code
npm install
Running the App
If you have Docker installed:

Build the Docker image:

bash
Copy code
docker build -t ovarc-bookstore-frontend .
Run using Docker:

bash
Copy code
docker run -p 3000:3000 ovarc-bookstore-frontend
The app should now be running at http://localhost:3000.

Without Docker:

Run the app using:

bash
Copy code
npm start
The app should be available at http://localhost:3000.

Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

License
This project is licensed under the MIT License - see the LICENSE.md file for details.

Acknowledgments
Thanks to Ovarc for the opportunity to tackle this challenge.
All contributors who participated in this project.
