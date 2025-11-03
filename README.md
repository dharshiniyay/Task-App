# 📋 Task Management App

**An intermediate-level React application demonstrating advanced concepts like routing, form management, local data persistence, and data table features.**

---

## 🎯 Project Objective

The goal of this project is to develop a fully **functional Task Management App** that provides CRUD (Create, Read, Update, Delete) operations. It serves as a practical exercise in integrating several core modern web development practices, specifically **React Router**, controlled **form validation**, and dynamic **table management**.

---

## ✨ Features

This application includes the following core functionalities:

### 1. 🧭 Navigation & Routing (React Router DOM)
* **Home/Dashboard:** Displays a comprehensive list of all stored tasks.
* **`/tasks/new`:** Dedicated page for creating a new task.
* **`/tasks/edit/:id`:** Dedicated page for editing an existing task, dynamically loading data based on the task ID.

### 2. 📝 Form Handling & Validation
* Implementation of **controlled forms** for both task creation and editing.
* Utilize **custom React hooks** (e.g., `useForm`) to simplify and centralize form state and input handling.
* Client-side **form validation** to ensure required fields are completed and data is correctly formatted before submission.

### 3. 💾 Data Management
* Tasks are maintained and manipulated in the application's **local state**.
* Data persistence is achieved by synchronizing the task list with **Browser Local Storage**, ensuring data is retained across browser sessions.

### 4. 📊 Task Display & Manipulation
* Tasks are presented in a **tabular format** (Table Component).
* **Sorting:** Ability to sort the task list by different columns (e.g., Status, Due Date, Priority).
* **Filtering:** Basic filtering options (e.g., filter by 'Complete' or 'In Progress').
* **Search:** A dedicated search bar to quickly filter the table content by task title or description.
* **Pagination:** Implements pagination controls to handle large datasets effectively and improve performance.

---

## 💻 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React.js** | Core library for component-based UI development. |
| **React Router DOM** | Handling client-side routing and navigation. |
| **CSS Modules / Styled Components / Tailwind CSS** | For consistent and modular styling. |

---

## ⚙️ Installation and Setup

Follow these steps to get a local copy of the project up and running:

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_REPO_URL]
    cd task-management-app
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn start
    ```

The application will be accessible in your browser, typically at `http://localhost:3000` or `http://localhost:5173`.

---

## 📂 Suggested File Structure
