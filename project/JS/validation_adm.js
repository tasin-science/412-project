import { errorRegistrationLayout, license } from './error_layout.js';
import { setFavicon } from './set_favicon.js'


export function validateAdm() {

  const email = document.getElementById('email')?.value.trim();
  const pass = document.getElementById('password')?.value.trim();

  if (!email || !pass) {
    document.title = "Admin Login Error";
    setFavicon("../IMG/LOGO/C_err.png");
    document.body.innerHTML = `
      ${errorRegistrationLayout}
      <nav class="navbar_regerr">
        <ul class="navlist_regerr">
            <li><a href="registration.html">Registration</a></li>
            <li><a href="login.html">Login</a></li>
            <li><a class="active_list" href="admin.html">Admin</a></li>
            ${license}
        </ul>
    </nav>
      <main class="inputation_system">
        <div class="regerr_page" id="regPage">
          <h2 class="regerr_h2">Login your account <sub>For admin only</sub></h2>
          <label class="c_regerrlabel">Email:</label>
          <input class="regerr_input inputsize" type="email" id="email" placeholder="Please enter your email">
          <label class="c_regerrlabel">Password:</label>
          <input class="regerr_input inputsize" type="password" id="password" placeholder="Please enter your password">
          <button id="adminBtn" class="regerr_btn">Login</button>
        </div>
      </main>
    `;

    setTimeout(() => {
  const newBtn = document.getElementById('adminBtn');
  if (newBtn) {
    newBtn.addEventListener('click', validateAdm);
  }

  // 🔄 Add hover listeners for placeholder change
  const emailInput = document.getElementById('email');
  const passInput = document.getElementById('password');

  const placeholderMap = {
    email: "Please write your email",
    password: "Please create your password"
  };

  if (emailInput) {
    emailInput.addEventListener('mouseenter', () => {
      emailInput.placeholder = "Please proceed...";
    });
    emailInput.addEventListener('mouseleave', () => {
      emailInput.placeholder = placeholderMap.email;
    });
  }

  if (passInput) {
    passInput.addEventListener('mouseenter', () => {
      passInput.placeholder = "Please proceed...";
    });
    passInput.addEventListener('mouseleave', () => {
      passInput.placeholder = placeholderMap.password;
    });
  }
}, 0);

  } else {
    alert('Login successful!');
  }
}
