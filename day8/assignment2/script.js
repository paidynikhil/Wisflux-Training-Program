
function animateElement(element, animations, animationConfig) {
  return new Promise((resolve, reject) => {
    const animation = element.animate(animations, animationConfig);
    animation.onfinish = () => resolve();
    animation.onerror = () => reject();
  });
}
async function animateImagesSequentially() {
  const container = document.getElementById("container");
  const images = container.querySelectorAll("img");

  const animations = [
    { transform: "rotate(360deg) scale(1.5)" },
  ];

  const animationConfig = {
    duration: 2000,
    iterations: 1,
    fill: "forwards",
  };

  for (let i = 0; i < images.length; i++) {
    try {
      await animateElement(images[i], animations, animationConfig);
      console.log(`Image ${i + 1} animation finished`);
    } catch (error) {
      console.error(`Error animating image ${i + 1}:`, error);
    }
  }

  console.log("All animations finished");
}


document.addEventListener("DOMContentLoaded", () => {
  animateImagesSequentially();
});
