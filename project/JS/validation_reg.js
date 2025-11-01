import { errorRegistrationLayout, license } from './error_layout.js';
import { setFavicon } from './set_favicon.js'


export function validateReg() {

  const user = document.getElementById('name')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  const pass = document.getElementById('password')?.value.trim();

  if (!user || !email || !pass) {
    document.title = "Registration Error";
    setFavicon("../IMG/LOGO/C_err.png");
    document.body.innerHTML = `
      ${errorRegistrationLayout}
      <nav class="navbar_regerr">
        <ul class="navlist_regerr">
            <li><a class="active_list" href="registration.html">Registration</a></li>
            <li><a href="login.html">Login</a></li>
            <li><a href="admin.html">Admin</a></li>
            ${license}
        </ul>
    </nav>
      <main class="inputation_system">
        <div class="regerr_page" id="regPage">
          <h2 class="regerr_h2">Register to create your account</h2>
          <label class="c_regerrlabel">Name:</label>
          <input class="regerr_input inputsize" type="text" id="name" placeholder="Please enter your name">
          <label class="c_regerrlabel">Email:</label>
          <input class="regerr_input inputsize" type="email" id="email" placeholder="Please enter your email">
          <label class="c_regerrlabel">Password:</label>
          <input class="regerr_input inputsize" type="password" id="password" placeholder="Please create your password">
          <button id="createBtn" class="regerr_btn">Create</button>
        </div>
      </main>
    `;

    setTimeout(() => {
  const newBtn = document.getElementById('createBtn');
  if (newBtn) {
    newBtn.addEventListener('click', validateReg);
  }

  // 🔄 Add hover listeners for placeholder change
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passInput = document.getElementById('password');

  const placeholderMap = {
    name: "Please write your name",
    email: "Please write your email",
    password: "Please create your password"
  };

  if (nameInput) {
    nameInput.addEventListener('mouseenter', () => {
      nameInput.placeholder = "Please proceed...";
    });
    nameInput.addEventListener('mouseleave', () => {
      nameInput.placeholder = placeholderMap.name;
    });
  }

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
    alert('Registration successful!');
  }
}
