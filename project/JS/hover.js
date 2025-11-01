export function setupHoverEffect() {
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    const original = input.placeholder;
    input.addEventListener('mouseover', () => input.placeholder = 'Please proceed...');
    input.addEventListener('mouseout', () => input.placeholder = original);
  });
}


