import './scss/estilos.scss';
import { tsParticles } from '@tsparticles/engine';
import { loadConfettiPreset } from '@tsparticles/preset-confetti';

loadConfettiPreset(tsParticles);
tsParticles.load({
  id: 'fiesta',
  options: {
    fullScreen: {
      zIndex: 1,
    },
    particles: {
      color: {
        value: ['#40e0e0', '#ffcf40'],
      },
      move: {
        direction: 'bottom',
        enable: true,
        outModes: {
          default: 'out',
        },
        size: true,
        speed: {
          min: 1,
          max: 3,
        },
      },
      number: {
        value: 500,
        density: {
          enable: true,
          // area: 800,
        },
      },
      opacity: {
        value: 1,
        animation: {
          enable: false,
          startValue: 'max',
          destroy: 'min',
          speed: 0.3,
          sync: true,
        },
      },
      rotate: {
        value: {
          min: 0,
          max: 360,
        },
        direction: 'random',
        move: true,
        animation: {
          enable: true,
          speed: 60,
        },
      },
      tilt: {
        direction: 'random',
        enable: true,
        move: true,
        value: {
          min: 0,
          max: 360,
        },
        animation: {
          enable: true,
          speed: 60,
        },
      },
      shape: {
        type: ['circle', 'square'],
        options: {},
      },
      size: {
        value: {
          min: 2,
          max: 4,
        },
      },
      roll: {
        darken: {
          enable: true,
          value: 30,
        },
        enlighten: {
          enable: true,
          value: 30,
        },
        enable: true,
        speed: {
          min: 15,
          max: 25,
        },
      },
      wobble: {
        distance: 30,
        enable: true,
        move: true,
        speed: {
          min: -15,
          max: 15,
        },
      },
    },
  },
});

// tsParticles.load({
//   id: 'fiesta',
//   options: {
//     preset: 'confetti',
//     particles: {
//       color: { value: ['#40e0e0', '#ffcf40'] }, //['#faf9f6', '#ffcf40', '#ee82ee', '#40e0e0'] },
//       // move: {
//       //   direction: 'bottom',
//       //   enable: true,
//       //   outModes: {
//       //     default: 'out',
//       //   },
//       //   size: true,
//       //   speed: {
//       //     min: 1,
//       //     max: 3,
//       //   },
//       // },
//     },
//     emitters: {
//       life: {
//         duration: 0,
//       },
//     },
//   },
// });

// tsParticles.load({
//   id: 'tsparticles',
//   options: {
//     fullScreen: {
//       zIndex: 1,
//     },
//     particles: {
//       color: {
//         value: ['#FFFFFF', '#FFd700'],
//       },
//       move: {
//         direction: 'bottom',
//         enable: true,
//         outModes: {
//           default: 'out',
//         },
//         size: true,
//         speed: {
//           min: 1,
//           max: 3,
//         },
//       },
//       number: {
//         value: 500,
//         density: {
//           enable: true,
//           area: 800,
//         },
//       },
//       opacity: {
//         value: 1,
//         animation: {
//           enable: false,
//           startValue: 'max',
//           destroy: 'min',
//           speed: 0.3,
//           sync: true,
//         },
//       },
//       rotate: {
//         value: {
//           min: 0,
//           max: 360,
//         },
//         direction: 'random',
//         move: true,
//         animation: {
//           enable: true,
//           speed: 60,
//         },
//       },
//       tilt: {
//         direction: 'random',
//         enable: true,
//         move: true,
//         value: {
//           min: 0,
//           max: 360,
//         },
//         animation: {
//           enable: true,
//           speed: 60,
//         },
//       },
//       shape: {
//         type: ['circle', 'square'],
//         options: {},
//       },
//       size: {
//         value: {
//           min: 2,
//           max: 4,
//         },
//       },
//       roll: {
//         darken: {
//           enable: true,
//           value: 30,
//         },
//         enlighten: {
//           enable: true,
//           value: 30,
//         },
//         enable: true,
//         speed: {
//           min: 15,
//           max: 25,
//         },
//       },
//       wobble: {
//         distance: 30,
//         enable: true,
//         move: true,
//         speed: {
//           min: -15,
//           max: 15,
//         },
//       },
//     },
//   },
// });

console.log('..:: 💜 Pato & Alejo 💜 ::..');
