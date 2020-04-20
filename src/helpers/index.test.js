import { getLetterMatchCount } from './index';

describe('getLetterMatchCount', () => {
  const secretWord = 'party;';
  test('returns correct count when there are no matching letters', () => {
    const letterMatchCount = getLetterMatchCount('bliss', secretWord);
    expect(letterMatchCount).toBe(0);
  });

  test('returns correct count when there are 3 matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord);
    expect(letterMatchCount).toBe(3);
  });

  test('returns correct count when there duplicate letters in the match', () => {
    const letterMatchCount = getLetterMatchCount('Aaron', secretWord);
    expect(letterMatchCount).toBe(2);
  });
});
