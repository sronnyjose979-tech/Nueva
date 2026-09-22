// Cantidad de flores y pétalos por flor (ajustable)
const NUM_FLORES = 5;
const PETALOS_POR_FLOR = 12;
const NUM_PETALOS_CAYENDO = 18;

const garden = document.getElementById('garden');

function crearFlor(duracionSway) {
  const flower = document.createElement('div');
  flower.className = 'flower';
  flower.style.animationDuration = duracionSway + 's';

  // Tallo con hojas
  const stem = document.createElement('div');
  stem.className = 'stem';

  const leafLeft = document.createElement('div');
  leafLeft.className = 'leaf left';
  const leafRight = document.createElement('div');
  leafRight.className = 'leaf right';

  stem.appendChild(leafLeft);
  stem.appendChild(leafRight);

  // Flor (pétalos + centro)
  const bloom = document.createElement('div');
  bloom.className = 'bloom';

  const anguloPorPetalo = 360 / PETALOS_POR_FLOR;
  for (let i = 0; i < PETALOS_POR_FLOR; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.transform = `translate(-50%,-100%) rotate(${i * anguloPorPetalo}deg)`;
    bloom.appendChild(petal);
  }

  const center = document.createElement('div');
  center.className = 'center';
  bloom.appendChild(center);

  flower.appendChild(stem);
  flower.appendChild(bloom);

  return flower;
}

// Genera las flores del jardín con tiempos de balanceo ligeramente distintos
for (let i = 0; i < NUM_FLORES; i++) {
  const duracion = 4 + Math.random() * 2; // entre 4s y 6s
  const flor = crearFlor(duracion.toFixed(2));
  garden.appendChild(flor);
}

// Genera pétalos cayendo suavemente por toda la escena
const scene = document.querySelector('.scene');
for (let i = 0; i < NUM_PETALOS_CAYENDO; i++) {
  const petal = document.createElement('div');
  petal.className = 'petal-fall';

  const left = Math.random() * 100;
  const duracion = 6 + Math.random() * 6;
  const retraso = Math.random() * 10;
  const tamano = 6 + Math.random() * 6;

  petal.style.left = left + '%';
  petal.style.width = tamano + 'px';
  petal.style.height = (tamano * 1.4) + 'px';
  petal.style.animationDuration = duracion + 's';
  petal.style.animationDelay = retraso + 's';

  scene.appendChild(petal);
}