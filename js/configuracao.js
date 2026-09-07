// Ajustes da corrida. Distâncias em metros; física em pixels e segundos.
window.RUNNER_CONFIG = Object.freeze({
  width: 1100,           // Largura lógica do cenário.
  height: 520,           // Altura lógica do cenário.
  ground: 418,           // Altura do chão.
  finish: 600,           // Distância para vencer.
  pixelsPerMeter: 36,
  speed: 100,
  speedBoost: 1.25,
  gravity: 1650,
  jumpVelocity: -835,    // Mais negativo = salto mais alto.
  moveSpeed: 270,
  rollDuration: 0.7,
  protection: 2.4        // Proteção ao retomar após uma resposta certa.
});
