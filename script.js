// var display;
// const countdown = (num) => {
//   alert(num+'out');
//   // callback1(num - 1);
//   // let displayCountdown1 =countdown;
//   display=num-1;
//   // alert(display);
//   return display;
//   // alert(display);
//   // displayCountdown();
// };

// const displayCountdown = () => {
//   countdown(10, (num) => {
//     alert(display);
//     
//     alert(num+'inside');
//     countdown(num, (num) => {
//       alert('9');
//       
//       countdown(num, (num) => {
//         countdown(num, (num) => {
//           countdown(num, (num) => {
//             countdown(num, (num) => {
//               countdown(num, (num) => {
//                 countdown(num, (num) => {
//                   countdown(num, (num) => {
//                     countdown(num, () => {
//                       if (display > 1) {
//                         
//                         displayCountdown--;
//                         requestAnimationFrame(displayCountdown);
//                       } else {
//                         document.getElementById('countdown').textContent = 'Happy Independence Day!!!';
//                       }
//                     });
//                   });
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// };

// window.onload = function() {
//   displayCountdown();
// };
var display;

const countdown = (num, callback) => {
  // alert(num + ' out');
  display = num - 1;
  callback(display);
};

const displayCountdown = () => {
  countdown(10, (num) => {
    // alert(display);
    document.getElementById('countdown').textContent = display;
    // alert(num + ' inside');
    startTimer();
  });
};

const startTimer = () => {
  countdown(display, (num) => {
    // alert(num);
    document.getElementById('countdown').textContent = display;
    if (num > 0) {
      display--;
      startTimer();
    } else {
      document.getElementById('countdown').textContent = 'Happy Independence Day!';
    }
  });
};

window.onload = function() {
  displayCountdown();
};