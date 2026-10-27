document.addEventListener('DOMContentLoaded', () => {
  const runBtn = document.getElementById('run-whoami-btn');
  const outputContainer = document.getElementById('whoami-output');
  const tokens = outputContainer ? outputContainer.querySelectorAll('.token') : [];

  if (!runBtn || !outputContainer || tokens.length === 0) {
    return;
  }

  let isAnimating = false;

  const prefersReducedMotion = () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  };

  runBtn.addEventListener('click', () => {
    if (isAnimating || prefersReducedMotion()) {
      return;
    }

    isAnimating = true;
    outputContainer.classList.add('revealing');

    tokens.forEach((token) => {
      token.classList.remove('token-visible');
      token.classList.add('token-hidden');
    });

    const stepDelayMs = 70;
    const transitionMs = 180;

    tokens.forEach((token, index) => {
      setTimeout(() => {
        token.classList.remove('token-hidden');
        token.classList.add('token-visible');

        if (index === tokens.length - 1) {
          setTimeout(() => {
            outputContainer.classList.remove('revealing');
            tokens.forEach((t) => {
              t.classList.remove('token-hidden', 'token-visible');
            });
            isAnimating = false;
          }, transitionMs);
        }
      }, index * stepDelayMs);
    });
  });
});
