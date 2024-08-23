# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Trade Room

## Overview

**Trade Room** is a fully responsive web application built using React and Tailwind CSS. This project features a dynamic navbar, detailed course information, and animations applied to every image, enhancing the user experience. The main challenge of the project was implementing these animations while ensuring the site's responsiveness across various devices.

## Setup Instructions

Follow these steps to set up and run the project locally:

## Live Demo

[Visit the live site](https://nex-g-tech-assignment-hqre.vercel.app/)

1. **Clone the Repository**:

   - Open your terminal or Git Bash.
   - Run the following command to clone the repository to your local machine:
     ```bash
     git clone https://github.com/Arjoo6377/NexG.Tech.assignment.git
     ```

2. **Navigate to the Project Directory**:

   - Change into the project directory:
     ```bash
     cd NexG.Tech.assignment
     ```

3. **Install Dependencies**:

   - Install the required packages by running:
     ```bash
     npm install
     ```

4. **Start the Development Server**:
   - Start the development server to view the project in your browser:
     ```bash
     npm run dev
     ```
   - Open your browser and go to `http://localhost:3000` to view the application.

## List of Implemented Features

- **Responsive Design**: The application is fully responsive, providing a seamless experience on devices of all sizes.
- **Dynamic Navbar**: A navigation bar that adapts to different screen sizes and allows easy navigation throughout the site.
- **Course Details**: Detailed sections providing comprehensive information about the available courses.
- **Image Animations**: Animations are applied to every image, enhancing the interactivity and visual appeal of the site.
- **Modern Styling with Tailwind CSS**: Utilizes Tailwind CSS for a sleek, modern design, adhering to best practices in web development.

## Assumptions and Decisions

- **Technology Stack**: React was chosen for its component-based architecture and Tailwind CSS for its efficient and responsive styling.
- **Focus on Animations**: The decision was made to incorporate animations for all images to create a more engaging user experience.
- **Responsiveness**: The project prioritizes a responsive design to ensure optimal performance across various screen sizes.

## Challenges and Solutions

- **Implementing Animations**: One of the most significant challenges was adding animations to every image while maintaining performance and responsiveness. This was resolved by balancing CSS animations and using React Spring for more complex interactions.

## Deployment

The site is deployed on Vercel. You can view the live application at: [https://your-vercel-site-url.vercel.app](https://your-vercel-site-url.vercel.app).

## License

This project is licensed under the [MIT License](LICENSE).
