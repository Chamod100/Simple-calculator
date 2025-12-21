# Premium Calculator

A modern, responsive calculator built using **HTML**, **Tailwind CSS (CDN)**, and **Vanilla JavaScript**.  
Includes a clean UI, dark/light theme toggle, expression preview, and basic arithmetic operations.

---

## 🚀 Features

- Addition (+), Subtraction (−), Multiplication (×), Division (÷)
- Real-time expression building
- Expression preview before evaluation
- Clear (C) and Backspace (⌫) actions
- Decimal number support
- Error handling for invalid expressions
- Dark / Light mode toggle
- Automatically detects system theme
- Theme preference stored using `localStorage`
- Smooth transitions and modern UI design

---

## 📂 Project Structure

```text
premium-calculator/
├── index.html
├── asset/
│   └── js/
│       └── app.js
└── README.md
🛠️ Tech Stack
HTML5

Tailwind CSS (CDN)

Vanilla JavaScript

LocalStorage

⚙️ Setup
No installation required.

Download or clone the project

Open index.html in any modern browser

🧩 Usage
Click number buttons to enter values

Use operator buttons (+, −, ×, ÷) to build expressions

Press = to calculate the result

Use:

C → Clear all input

⌫ → Remove last character

Use 🌙 / 🌞 button to switch between Dark and Light modes

🌗 Theme Behavior
Detects system theme on first load

Saves selected theme in localStorage

Persists theme after page refresh

🧠 Logic Overview
Calculator input is handled as a string expression

Prevents consecutive operator inputs

Expression is evaluated using:

js
Copy code
new Function('return ' + expression)()
Invalid expressions are safely handled

🧪 Error Handling
Prevents multiple operators in sequence

Uses try...catch for expression evaluation

Displays "Error" for invalid calculations

📦 Deployment
Static web project

Can be deployed using:

GitHub Pages

Netlify

Vercel

Any static hosting service

⚠️ Notes
Button-based input only (no keyboard input)

No advanced mathematical functions

eval() is not used (safer evaluation method applied)

📄 License
MIT License

🎯 Learning Outcomes
Tailwind utility-first styling

Dark / Light theme implementation

DOM event handling

Expression building and evaluation

LocalStorage usage

markdown
Copy code

If you want:
- a **short README**
- a **professional GitHub-style README**
- or an **assignment-friendly README**

just tell me 👍