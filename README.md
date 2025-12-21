# Premium Look Calculator

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
simple-calculator/
├── index.html
├── assets/
│   └── js/app.js
└── README.md
```

## 🛠️ Tech Stack

- HTML / Tailwind (inline config)
- Vanilla JavaScript

## ⚙️ Setup

Open `index.html` directly.

## 🧩 Usage

1. Click number/operator buttons
2. Press `=` to evaluate
3. Use `C` to clear / Back to remove last char
4. Use `%` to convert the current number to a percentage (e.g., 50 becomes 0.5)
5. If an invalid expression is entered (e.g., division by zero), "Error" will be displayed

### Input Limits

- Max digits is controlled by `MAX_DIGITS` in `assets/js/app.js` (default `15`). Only numeric characters count toward this cap; decimals and operators are ignored.

Quick change:

```js
// assets/js/app.js
const MAX_DIGITS = 12; // set to your preferred cap
```

If you want the cap to include dots/operators, change the guard to use the raw length:

```js
function isOverMaxDigits(text) {
  return text.length > MAX_DIGITS;
}
```

### Simpler Input Flow

- All character appends go through `appendToDisplay(char)`, which:
  - Builds the next value (handles leading zero)
  - Enforces `MAX_DIGITS`
  - Updates both `display` and `preview`

Example:

```js
// numbers
function handleNumber(number) {
  appendToDisplay(number);
}

// decimal
function handleDecimal() {
  appendToDisplay(".");
}
```

## 🧱 Architecture

- Event delegation per button category (number, operation, action)
- Builds expression string, evaluates via `eval()`

## 🗄️ Data / Storage

None.

## 🔧 Scripts

None.

## 🧪 Testing

- Manual: chained operations, floating point input, percentage calculation, error scenarios (e.g., division by zero, invalid expressions)

## 📦 Deployment

Static.

## 📝 Notes

- `eval()` is used, but input is limited to button presses for safety
- Percentage button (%) applies to the current number only
- Error handling is included for invalid expressions and division by zero
- No parentheses or advanced math functions

## 📄 License

MIT

## Learning Outcomes

- UI grid layout
- Dynamic expression building
- Tailwind styling & theming
- Implementing percentage and error handling in a calculator
