# 🚀 Resource Manager – Next.js Application

A clean and modern web application for managing learning resources such as Articles, Videos, and Tutorials.
Users can create, view, update, and delete resources, with search and filtering support — all in the browser using localStorage.

---

## 📌 Features

### ✅ Core Functionality
- Create new resources
- Edit existing resources
- Delete resources
- View all resources
- Persistent data via browser localStorage (no backend required)

### 🎨 UI/UX Features
- Modern Tailwind CSS UI
- Responsive design
- Reusable form component
- Dynamic color badges for resource type
- Toast notifications for success/error
- Search by title

---

## 🛠 Tech Stack Used

### Frontend
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS (v4 via `@tailwindcss/postcss`)
- React Hook Form
- React Hot Toast

> Note: This project is frontend-only. Data is stored in `localStorage`. No server or database setup is required.

---

## ⚙️ Setup Instructions

### 1) Clone the repository
```bash
git clone https://github.com/Vaibhav-59/RM-NextJs.git
cd RM-NextJs
```

### 2) Install dependencies
```bash
npm install
```

### 3) Start the development server
```bash
npm run dev
```

- App will run at: http://localhost:3000
- If you run into TypeScript import alias errors, ensure your editor restarted and Next.js picked up `tsconfig.json` changes.

---