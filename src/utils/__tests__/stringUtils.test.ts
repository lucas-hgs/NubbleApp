import {stringUtils} from '@utils';

test('captalizeFirstLetter', () => {
  stringUtils.captalizeFirstLetter('Ana maria');
  stringUtils.captalizeFirstLetter('ANA MARIA');
  stringUtils.captalizeFirstLetter('MaRIA');

  const nome = stringUtils.captalizeFirstLetter('Ana maria');

  expect(nome).toBe('Ana Maria');
});
