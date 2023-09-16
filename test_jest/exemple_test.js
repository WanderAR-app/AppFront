// Importez les fonctions ou modules que vous souhaitez tester.
const { sum, subtract } = require('./example-functions');

// Test d'une fonction de somme (sum).
test('Adding 1 + 2 equals 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// Test d'une fonction de soustraction (subtract).
test('Subtracting 2 - 1 equals 1', () => {
  expect(subtract(2, 1)).toBe(1);
});
