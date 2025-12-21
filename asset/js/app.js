const display = document.getElementById("display");
const preview = document.getElementById("preview");
const buttons = document.querySelectorAll("[data-value]");
const toggle = document.getElementById("themeToggle");
const html = document.documentElement;

let exp = "";

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
    toggle.textContent = "🌞";

} else {
    html.classList.remove('dark');
    toggle.textContent = "🌙";
}

buttons.forEach(btn => {
    btn.onclick = () => {
        const v = btn.dataset.value;

        if (v === "C") {
            exp = "";
            display.value = "0";
            preview.textContent = "";

        } else if (v === "Back") {
            exp = exp.slice(0, -1);
            display.value = exp || "0";

        } else if (v === "=") {
            try {
                if (!exp) return;
                preview.textContent = exp + " =";
                exp = String(new Function('return ' + exp)());
                display.value = exp;

            } catch {
                display.value = "Error";
                exp = "";
            }

        } else {
            if (["+", "-", "*", "/"].includes(v) && ["+", "-", "*", "/"].includes(exp.slice(-1))) return;
            exp += v;
            display.value = exp;
        }
    };
});

toggle.onclick = () => {
    if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        localStorage.theme = 'light';
        toggle.textContent = "🌙";

    } else {
        html.classList.add("dark");
        localStorage.theme = 'dark';
        toggle.textContent = "🌞";
    }
};