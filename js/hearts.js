document.addEventListener('click', createHeart);
document.addEventListener('touchstart', createHeart);

function createHeart(e) {
  const heart = document.createElement('div');
  heart.classList.add('click-heart');

  const x = e.touches ? e.touches[0].clientX : e.clientX;
  const y = e.touches ? e.touches[0].clientY : e.clientY;

  const size = Math.random() * 20 + 10;

  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2000);
}
