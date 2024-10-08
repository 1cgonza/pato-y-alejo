import lluvia from './lluvia';
import './scss/estilos.scss';
const video = document.querySelector<HTMLVideoElement>('#animacionBichosLindos');
const reproducir = document.querySelector<HTMLDivElement>('#reproducir');
const audio = document.querySelector<HTMLAudioElement>('#sol');

const entrada = document.getElementById('abreInvitacion') as HTMLDivElement;
const tarjeta = document.getElementById('tarjeta') as HTMLDivElement;
const mensaje1 = document.getElementById('mensaje1') as HTMLDivElement;
const mensaje2 = document.getElementById('mensaje2') as HTMLDivElement;
const mensaje3 = document.getElementById('mensaje3') as HTMLDivElement;
const mensaje4 = document.getElementById('mensaje4') as HTMLDivElement;
const mensaje5 = document.getElementById('mensaje5') as HTMLDivElement;
const mensaje6 = document.getElementById('mensaje5') as HTMLDivElement;
const mensajes = [mensaje1, mensaje2, mensaje3, mensaje4, mensaje5, mensaje6];
let reproduciendoVideo = false;

if (video && reproducir && audio) {
  video.loop = true;

  reproducir.onclick = () => {
    if (entrada) entrada.classList.add('oculto');
    audio.loop = true;
    audio.play();
    mensajes[0].classList.add('visible');

    let viendoMensaje = 0;
    try {
      video.classList.remove('oculto');
      video.play();
      reproduciendoVideo = true;
    } catch (error) {
      console.error('Error para reproducir video', error);
    }

    setInterval(() => {
      mensajes[viendoMensaje].classList.remove('visible');
      viendoMensaje = (viendoMensaje + 1) % mensajes.length;
      mensajes[viendoMensaje].classList.add('visible');
    }, 8000);

    tarjeta.classList.add('oculto');
  };
}

lluvia();

console.log('..:: 💜 Pati & Alejo 💜 ::..');
