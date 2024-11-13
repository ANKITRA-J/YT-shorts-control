// Function to adjust playback rate
function adjustPlaybackRate(rate) {
    const video = document.querySelector("video");
    if (video) video.playbackRate = rate;
  }
  
  // Function to seek video by seconds and show animation
  function seekVideo(seconds) {
    const video = document.querySelector("video");
    if (video) {
      video.currentTime += seconds;
      showAnimation(seconds > 0 ? "forward" : "backward");
    }
  }
  
  // Function to show forward/backward animation
  function showAnimation(direction) {
    let animationElement = document.getElementById("playback-animation");
  
    if (!animationElement) {
      animationElement = document.createElement("div");
      animationElement.id = "playback-animation";
      document.body.appendChild(animationElement);
    }
  
    animationElement.className = direction;
    animationElement.style.animation = "none"; // Reset animation
    void animationElement.offsetWidth; // Trigger reflow to restart animation
    animationElement.style.animation = "wave 0.5s ease";
  }
  
  // Add event listeners for keyboard shortcuts
  document.addEventListener("keydown", (event) => {
    const video = document.querySelector("video");
    if (!video) return;
  
    switch (event.key) {
      case 'ArrowRight': // Forward
        seekVideo(5); // Adjust forward by 5 seconds
        break;
      case 'ArrowLeft': // Backward
        seekVideo(-5); // Adjust backward by 5 seconds
        break;
      case 'a': // Slow down
        adjustPlaybackRate(0.5);
        break;
      case 'd': // Speed up
        adjustPlaybackRate(2.0);
        break;
      case 'r': // Reset speed
        adjustPlaybackRate(1.0);
        break;
      default:
        break;
    }
  });
  