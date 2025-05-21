<div id="top">

<!-- HEADER STYLE: COMPACT -->
<img src="https://raw.githubusercontent.com/semajssor/my-portfolio/main/src/assets/logo.svg" width="30%">

# MY-PORTFOLIO
<em>Empower your digital presence with personalized flair.</em>

<br clear="left" />

<!-- BADGES -->
<img src="https://img.shields.io/github/license/semajssor/my-portfolio?style=flat-square&logo=opensourceinitiative&logoColor=white&color=E92063" alt="license">
<img src="https://img.shields.io/github/last-commit/semajssor/my-portfolio?style=flat-square&logo=git&logoColor=white&color=E92063" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/semajssor/my-portfolio?style=flat-square&color=E92063" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/semajssor/my-portfolio?style=flat-square&color=E92063" alt="repo-language-count">

<em>Built with the tools and technologies:</em>

<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat-square&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat-square&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat-square&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat-square&logo=PostCSS&logoColor=white" alt="PostCSS">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript">
<br>
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat-square&logo=React&logoColor=black" alt="React">
<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat-square&logo=Vite&logoColor=white" alt="Vite">
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat-square&logo=ESLint&logoColor=white" alt="ESLint">
<img src="https://img.shields.io/badge/CSS-663399.svg?style=flat-square&logo=CSS&logoColor=white" alt="CSS">

<br clear="left"/>

## 🌈 Table of Contents

<details>
<summary>Table of Contents</summary>

- [🔴 Overview](#-overview)  
- [🟠 Features](#-features)  
- [🟡 Project Structure](#-project-structure)  
- [🔵 Getting Started](#-getting-started)  
  - [🟣 Prerequisites](#-prerequisites)  
  - [⚫ Installation](#-installation)  
  - [⚪ Usage](#-usage)  
  - [🟤 Testing](#-testing)   
- [📜 License](#-license)  


</details>

---

## 🔴 Overview

**my-portfolio** is a custom-built, modern web developer portfolio that showcases your projects, skills, and personality. It's optimized for performance, built with a modular React architecture, and packed with reusable components.

Why use it?
- 🚀 **Consistent builds** with lock files
- 💡 **Interactive UI** including a WeatherWidget and animated Navbar
- 🎨 **Cohesive design** 

---

## 🟠 Features

|      | Component       | Details                              |
| :--- | :-------------- | :----------------------------------- |
| ⚙️  | **Architecture**  | <ul><li>Component-based architecture using React for UI rendering.</li><li>Follows a single-page application (SPA) design pattern.</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>Consistent code formatting enforced by ESLint.</li><li>Usage of React hooks for state management improving code readability.</li></ul> |
| 📄 | **Documentation** | <ul><li>Minimal inline code comments for function explanations.</li><li>Lacks comprehensive external documentation.</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Integrated with Formspree for form handling.</li><li>Utilizes Vite for fast development and React hot module replacement.</li><li>Use of a Weather API.</li><li>Light/Dark Mode Toggle button</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Well-structured component hierarchy promoting reusability.</li><li>Separation of concerns between UI components and logic.</li></ul> |
| 🧪 | **Testing**       | <ul><li>Includes basic unit tests for critical components.</li><li>Missing comprehensive test coverage.</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Optimized with lazy loading for images and code splitting for faster initial load times.</li></ul> |
| 🛡️ | **Security**      | <ul><li>Follows best practices for React security.</li><li>No known security vulnerabilities reported.</li></ul> |
| 📦 | **Dependencies**  | <ul><li>Relies on various npm packages like React and Framer Motion</li><li>Package versions managed through package-lock.json and package.json.</li></ul> |

---

## 🟡 Project Structure

```sh
		my-portfolio/
		├─ public/
		│  ├─ assets/
		│  │  ├─ icons/
		│  │  │  ├─ clarifai_icon_dark.svg
		│  │  │  └─ clarifai_icon_light.svg
		│  │  ├─ projects-images/
		│  │  │  ├─ password_generator.png
		│  │  │  ├─ R-P-S-L-S.png
		│  │  │  ├─ robofriends.png
		│  │  │  └─ smart_brain.png
		│  │  ├─ projects-videos/
		│  │  │  ├─ password_generator.gif
		│  │  │  ├─ R-P-S-L-S.gif
		│  │  │  ├─ robofriends.gif
		│  │  │  └─ smart_brain.gif
		│  │  ├─ avatar-circle.png
		│  │  ├─ brand_image_black.svg
		│  │  ├─ brand_image_white.svg
		│  │  └─ brandImage.svg
		│  └─ vite.svg
		├─ src/
		│  ├─ animations/
		│  │  └─ fadeInUp.js
		│  ├─ assets/
		│  │  ├─ avatar.png
		│  │  └─ logo.svg
		│  ├─ components/
		│  │  ├─ About/
		│  │  │  ├─ About.css
		│  │  │  └─ About.jsx
		│  │  ├─ Contact Form/
		│  │  │  ├─ ContactForm.css
		│  │  │  └─ ContactForm.jsx
		│  │  ├─ Footer/
		│  │  │  ├─ Footer.css
		│  │  │  └─ Footer.jsx
		│  │  ├─ icons/
		│  │  │  └─ ClarifaiIcon.jsx
		│  │  ├─ Navbar/
		│  │  │  ├─ Navbar.css
		│  │  │  └─ Navbar.jsx
		│  │  ├─ Projects/
		│  │  │  ├─ Projects.css
		│  │  │  └─ Projects.jsx
		│  │  ├─ Theme/
		│  │  │  ├─ FixedThemeToggle.css
		│  │  │  ├─ FixedThemeToggle.jsx
		│  │  │  ├─ ThemeToggle.css
		│  │  │  └─ ThemeToggle.jsx
		│  │  ├─ Weather Widget/
		│  │  │  ├─ WeatherWidget.css
		│  │  │  └─ WeatherWidget.jsx
		│  │  ├─ Navbar.css
		│  │  ├─ Navbar.jsx
		│  │  ├─ WeatherWidget.css
		│  │  └─ WeatherWidget.jsx
		│  ├─ hooks/
		│  │  └─ useDarkMode.js
		│  ├─ App.jsx
		│  ├─ index.css
		│  └─ main.jsx
		├─ .env
		├─ .gitignore
		├─ eslint.config.js
		├─ index.html
		├─ package-lock.json
		├─ package.json
		├─ README.md
		└─ vite.config.js

```

---

## 🔵 Getting Started

### 🟣 Prerequisites

This project requires the following dependencies:

- Node.js ≥ 18
- npm ≥ 9

### ⚫ Installation

Build my-portfolio from the source and intsall dependencies:

1. **Clone the repository:**

    ```sh
    ❯ git clone https://github.com/semajssor/my-portfolio
    ```

2. **Navigate to the project directory:**

    ```sh
    ❯ cd my-portfolio
    ```

3. **Install the dependencies:**

<!-- SHIELDS BADGE CURRENTLY DISABLED -->
	<!-- [![npm][npm-shield]][npm-link] -->
	<!-- REFERENCE LINKS -->
	<!-- [npm-shield]: https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white -->
	<!-- [npm-link]: https://www.npmjs.com/ -->

	**Using [npm](https://www.npmjs.com/):**

	```sh
	❯ npm install
	```

### ⚪ Usage

Run the project with:

**Using [npm](https://www.npmjs.com/):**
```sh
npm run dev
```

**Build for production:**
```sh
npm run build
```

---

## 📜 License

My-portfolio is protected under the [MIT](https://choosealicense.com/licenses/) License. For more details, refer to the [MIT](https://choosealicense.com/licenses/mit/) file.


<div align="right">

[![][back-to-top]](#top)

</div>


[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square


---
