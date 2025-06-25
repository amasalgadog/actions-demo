const sum = require('./sum'); // Import the sum function from sum.js

test('Suma tres numeros', () => {
    expect(sum(1, 2, 3)).toBe(6); // toBe es un matcher de Jest que verifica que el resultado sea igual a 6
});

// test unitario de la funcion sum que verificar que la suma de 1 y 2 es igual a 3
// utiliza el framework de pruebas Jest