const start = document.querySelector('.js__start');
const container = document.querySelector('.js__container');

start.addEventListener('click', onStart);

// function onStart() {
//   // console.dir(container);
//   const result = [];
//   [...container.children].forEach(box => (box.textContent = ''));
//   [...container.children].forEach((box, i) => {
//     createPromise(i)
//       .then(smile => {
//         box.textContent = smile;
//         result.push('1');
//       })
//       .catch(smile => (box.textContent = smile))
//       .finally(() => {
//         setTimeout(() => {
//           if (i === container.children.length - 1) {
//             if (!result.length || result === 3) {
//               alert('Winner');
//             } else {
//               alert('Lost money');
//             }
//           }
//         }, 500);
//       });
//   });
// }

// function createPromise(delay) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const random = Math.random();
//       // const first = Math.floor(Math.random() * 10);
//       // const arr = ['🤣', '😎', '😆'];
//       if (random > 0.5) {
//         res('🤑');
//       } else {
//         rej('😈');
//       }
//     }, 1000 * delay);
//   });
// }

function onStart() {
  let counter = 0;

  [...container.children].forEach(box => (box.textContent = ''));
  const promises = [...container.children].map((_, i) => createPromise(i));
  Promise.allSettled(promises).then(item => {
    item.forEach((item, i) => {
      setTimeout(() => {
        if (item.status === 'fulfilled') {
          counter += 1;
        }
        container.children[i].textContent = item.value || item.reason;
        if (container.children.length - 1 === i) {
          setTimeout(() => {
            if (counter === container.children.length || !counter) {
              alert('Winner');
            } else {
              alert('Lost money');
            }
          }, 500);
        }
      }, i * 1000);
    });
  });
}

function createPromise(delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const random = Math.random();
      if (random > 0.5) {
        res('🤑');
      } else {
        rej('😈');
      }
    }, 1000 * delay);
  });
}
