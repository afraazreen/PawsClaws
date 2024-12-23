# Paws and Claws: Pet Adoption Website

**Paws and Claws** is a user-friendly platform designed to help individuals adopt pets by connecting potential adopters with available pets from various shelters. The website allows users to browse through a variety of pets, view detailed information about each pet, express their interest in adoption, and log in to access personalized features. It was built using a combination of **JavaScript**, **CSS**, **HTML**, **Node.js**, **Express.js**, **EJS**, and **Sessions**.

## Features

- **Pet Listings**: Users can view a list of pets available for adoption with key details such as breed, age, and temperament.
- **Search and Filter**: Filter pets by species, breed, size, and other criteria to find the perfect match.
- **Pet Profiles**: Each pet has a detailed profile page, including photos and information.
- **Contact Form**: Users can express interest in adopting a pet via a contact form that sends inquiries to shelter staff.
- **User Login & Sessions**: Users can log in to the platform, with session management that maintains user state across multiple pages.
- **Responsive Design**: Fully responsive layout that adapts to various screen sizes, including desktop, tablet, and mobile.

## Tech Stack

- **Frontend**:
  - HTML5
  - CSS3 (Custom styles)
  - JavaScript (Client-side interactivity)
  - EJS (Embedded JavaScript templating for dynamic content rendering)
  
- **Backend**:
  - Node.js
  - Express.js (Web framework for building the backend)
  - Sessions (For user login state management)

## Installation

To run this project locally on your machine, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/paws-and-claws.git
   ```

2. Navigate to the project directory:
   ```bash
   cd paws-and-claws
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and go to:
   ```
   http://localhost:port*
   ```
  Where port* is your specified port
## Usage

Once the project is running, you can:

- **Browse Pet Listings**: View a list of available pets, filter by species or breed, and click on a pet to see detailed information.
- **Login**: Users can log in to access personalized features like saving favorite pets or tracking their adoption inquiries.
- **Contact Form**: If interested in a pet, users can fill out a contact form to inquire about adoption.

### User Login:
- Users can log in using their credentials (stored in a session).
- If already logged in, users will see a personalized greeting.
- Sessions ensure that users remain logged in across pages until they log out.
