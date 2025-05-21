<div id="top">

<!-- HEADER STYLE: COMPACT -->
<img src="https://raw.githubusercontent.com/semajssor/my-portfolio/main/src/assets/logo.svg" width="20%">

# MY-PORTFOLIO
<em>Empower your digital presence with personalized flair.</em>

<br clear="left" />
<!-- BADGES -->
<img src="https://img.shields.io/github/last-commit/semajssor/my-portfolio?style=flat-square&logo=git&logoColor=white&color=E92063" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/semajssor/my-portfolio?style=flat-square&color=E92063" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/semajssor/my-portfolio?style=flat-square&color=E92063" alt="repo-language-count">

<br clear="left" />
<em>Built with the tools and technologies:</em>
<br clear="left" />
<!-- Languages & Tools Used -->
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat-square&logo=react&logoColor=black" alt="React">
<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat-square&logo=vite&logoColor=white" alt="Vite">
<img src="https://img.shields.io/badge/CSS-2965f1.svg?style=flat-square&logo=css3&logoColor=white" alt="CSS">
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat-square&logo=eslint&logoColor=white" alt="ESLint">
<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=flat-square&logo=prettier&logoColor=black" alt="Prettier">
<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat-square&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/Vercel-000000.svg?style=flat-square&logo=vercel&logoColor=white" alt="Vercel">
<img src="https://img.shields.io/badge/Formspree-EF233C.svg?style=flat-square" alt="Formspree">


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

|      | Component        | Details                                                                                                                                 |
| :--- | :--------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| ⚙️   | **Architecture**  | <ul><li>Component-based architecture using React for UI rendering.</li><li>Single Page Application (SPA) structure powered by Vite.</li></ul> |
| 🔩  | **Code Quality**   | <ul><li>Consistent code formatting enforced by ESLint and Prettier.</li><li>React Hooks used for state and lifecycle management.</li><li>Separation of logic into clean, readable components.</li></ul> |
| 📄  | **Documentation**  | <ul><li>Minimal inline code comments for functions and logic.</li><li>README.md provides an overview, but lacks deeper API/component documentation.</li></ul> |
| 🔌  | **Integrations**   | <ul><li>Formspree integration for contact form handling.</li><li>Vercel used for fast deployment with CI/CD support.</li><li>OpenWeatherMap API for weather widget in navbar.</li><li>Light/Dark mode toggle functionality.</li></ul> |
| 🧩  | **Modularity**     | <ul><li>Well-organized component structure with reusable layout and UI components.</li><li>Separation of styling and logic for maintainability.</li></ul> |
| 🧪  | **Testing**        | <ul><li>No formal test suite or test runner (e.g., Jest, React Testing Library) currently implemented.</li><li>Manual testing observed during development.</li></ul> |
| ⚡️   | **Performance**    | <ul><li>Optimized with Vite’s fast bundling and development server.</li><li>Lazy loading used for avatar image.</li><li>Minimal bundle size due to selective dependency usage.</li></ul> |
| 🛡️  | **Security**       | <ul><li>API keys hidden using environment variables (Vite `.env` file).</li><li>Follows React security best practices (no dangerouslySetInnerHTML, proper form handling).</li></ul> |
| 📦  | **Dependencies**   | <ul><li>Key packages: React, Vite, ESLint, Prettier, Framer Motion, Formspree, OpenWeatherMap API.</li><li>Dependencies managed via `package.json` and `package-lock.json`.</li></ul> |

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
git clone https://github.com/semajssor/my-portfolio
```

2. **Navigate to the project directory:**

```sh
cd my-portfolio
```

3. **Install the dependencies:**

```sh
npm install
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
