import * as translation from './translator';
import * as helpers from './helpers';
import { translateText } from './translate-text';

describe('translate text', () => {
  it('should choose morse when text is morse code', () => {
    const func = jest.spyOn(translation, 'morseToEng');
    translateText('...');
    expect(func).toHaveBeenCalled();
  });

  it('should choose english when text is english', () => {
    const func = jest.spyOn(translation, 'engToMorse');
    translateText('Hello');
    expect(func).toHaveBeenCalled();
    expect(func).toHaveBeenCalledWith('Hello');
  });
});
