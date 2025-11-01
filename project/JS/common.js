import { setupHoverEffect } from './hover.js';
import { validateReg } from './validation_reg.js';
import { validateLg } from './validation_lg.js';
import { validateAdm } from './validation_adm.js';

setupHoverEffect();

window.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('createBtn');
  if (btn) {
    btn.addEventListener('click', validateReg);
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('loginBtn');
  if (btn) {
    btn.addEventListener('click', validateLg);
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('adminBtn');
  if (btn) {
    btn.addEventListener('click', validateAdm);
  }
});

