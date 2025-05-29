import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('copy', e => e.preventDefault());
document.addEventListener('keydown', e => {
  if (
    e.key === 'F12' ||
    (e.ctrlKey && ['U', 'u', 'S', 's', 'C', 'c'].includes(e.key)) ||
    (e.ctrlKey && e.shiftKey && ['I', 'i', 'J', 'j'].includes(e.key))
  ) {
    e.preventDefault();
  }
});

createRoot(document.getElementById("root")!).render(<App />);
