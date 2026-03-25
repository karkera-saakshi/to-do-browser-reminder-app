# To-Do App with Browser Reminder

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-181717?logo=github&logoColor=white&style=for-the-badge)

A simple and interactive to-do app built with React and Vite, allowing users to manage tasks efficiently with browser notifications.

## Live Demo
https://karkera-saakshi.github.io/to-do-browser-reminder-app/

## Features
- 📝 Add, edit, and delete tasks.
- ⏰ Set reminders with browser notifications.
- 💾 Persistent tasks using localStorage.
- 🎨 Clean and modern UI with simple CSS styling.

## Tech Stack
- Frontend: React, Vite
- Styling: CSS
- Deployment: GitHub Pages
- Data Storage: Browser localStorage

## Screenshots

### Enabling notification:
<img width="1918" height="917" alt="image" src="https://github.com/user-attachments/assets/1c0caf6d-209c-4a25-87fd-28ff05a6b958" />

### After Enabling:
<img width="1918" height="917" alt="image" src="https://github.com/user-attachments/assets/aeff743b-f29e-4f70-9fe0-f246d9fc8467" />

### After Adding Tasks:
<img width="1918" height="915" alt="image" src="https://github.com/user-attachments/assets/ae2b5a4e-c593-4531-a91a-b2e497d254bc" />

### When The Timing Of The Task Hits
<img width="1918" height="918" alt="image" src="https://github.com/user-attachments/assets/9fa28e32-d84d-4200-87ba-61cd056f6c85" />

### After Deleting a Task:
<img width="1918" height="916" alt="image" src="https://github.com/user-attachments/assets/b1977197-3e83-4474-b34a-473c8dc06b67" />

## Key Implementation Highlights
- **Web Notifications API:** Sends real-time reminders even if the browser tab is inactive.
- **LocalStorage:** Keeps tasks saved across browser sessions, so you never lose data.
- **React Hooks:** Used `useState` for state management and `useEffect` for side effects like setting notifications.
- **Dynamic Task Logic:** Not just static tasks; tasks update in real-time and trigger browser alerts when due.
