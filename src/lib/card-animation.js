'use client';

export function initializeCardAnimations() {
  const cards = document.querySelectorAll('.card');
  
  const lerp = (start, end, factor) => start * (1 - factor) + end * factor;

  cards.forEach(card => {
    let currentX = 0;
    let currentY = 0;
    let animationFrameId = null;

    const updateMousePosition = (targetX, targetY) => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      const animate = () => {
        currentX = lerp(currentX, targetX, 0.1);
        currentY = lerp(currentY, targetY, 0.1);

        card.style.setProperty('--mouse-x', `${currentX}px`);
        card.style.setProperty('--mouse-y', `${currentY}px`);

        if (
          Math.abs(currentX - targetX) > 0.1 ||
          Math.abs(currentY - targetY) > 0.1
        ) {
          animationFrameId = requestAnimationFrame(animate);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    };

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      updateMousePosition(x, y);
      card.classList.add('active');
    });

    card.addEventListener('mouseleave', () => {
      updateMousePosition(rect.width / 2, rect.height / 2);
      card.classList.remove('active');
    });
  });
} 