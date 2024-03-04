function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let element0 = document.querySelectorAll('.element-animation0');
  let element1 = document.querySelectorAll('.element-animation1');
  let element2 = document.querySelectorAll('.element-animation2');
  let element3 = document.querySelectorAll('.element-animation3');
  let element4 = document.querySelectorAll('.element-animation4');

  for (let elm of element0) {
    observer.observe(elm);
  }

  for (let elm of element1) {
    observer.observe(elm);
  }
  for (let elm of element2) {
    observer.observe(elm);
  }
  for (let elm of element3) {
    observer.observe(elm);
  }
  for (let elm of element4) {
    observer.observe(elm);
  }
