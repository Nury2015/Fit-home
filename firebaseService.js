// firebaseService.js
import { ref, push } from 'firebase/database';
import { database } from './firebaseConfig';

export const guardarCalculo = (calculationData) => {
  return push(ref(database, 'calculations'), calculationData)
    .then(() => console.log('Cálculo guardado en Firebase'))
    .catch((error) => console.error('Error al guardar en Firebase:', error));
};