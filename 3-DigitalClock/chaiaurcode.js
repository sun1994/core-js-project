const clock = document.querySelector('#clock');
setInterval(() => {
  const time = new Date();
  clock.innerText = time.toLocaleTimeString();
}, 1000);
