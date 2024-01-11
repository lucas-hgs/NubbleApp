import {stringUtils} from '@utils';

describe('stringUtils', () => {
  describe('capitalizeFirstLetter', () => {
    it('should capitalize the first letter of each word', () => {
      expect(stringUtils.captalizeFirstLetter('Ana maria')).toBe('Ana Maria');
      expect(stringUtils.captalizeFirstLetter('maria')).toBe('Maria');
      expect(stringUtils.captalizeFirstLetter('ANA maria')).toBe('Ana Maria');
      expect(stringUtils.captalizeFirstLetter('anA MARIA')).toBe('Ana Maria');
      expect(stringUtils.captalizeFirstLetter('anA mARIA')).toBe('Ana Maria');
    });

    it('should be leading/trailing spaces', () => {
      expect(stringUtils.captalizeFirstLetter(' Ana Maria')).toBe('Ana Maria');
      expect(stringUtils.captalizeFirstLetter('Ana Maria ')).toBe('Ana Maria');
    });
  });
});
