//Lazyload
document.addEventListener("DOMContentLoaded", () => {
  // Get all images with data-src attribute
  const images = document.querySelectorAll("[data-src]");
  // Options for lazy loading
  const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px -50px 0px",
  };
  // Create image observer
  const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    // Loop through every image
    entries.forEach((entry) => {
      // Check whether they intersect
      if (!entry.isIntersecting) {
        return;
      }
      // If they are, load the image
      else {
        // Preload image
        preloadImage(entry.target);
        // Stop observing image
        imgObserver.unobserve(entry.target);
      }
    });
  }, imgOptions);

  // Observe images
  images.forEach((image) => {
    imgObserver.observe(image);
  });
});

/**
 *
 * @param {object} img Image tag element
 */
function preloadImage(img) {
  // Get the new source attribute
  const src = img.getAttribute("data-src");
  // Validate
  if (!src) {
    return;
  }
  // Update image src
  img.setAttribute("src", src);
  // Remove data attribute
  img.removeAttribute("data-src");
}
