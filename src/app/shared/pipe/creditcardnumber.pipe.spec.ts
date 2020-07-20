import { CreditcardnumberPipe } from './creditcardnumber.pipe';

describe('CreditcardnumberPipe', () => {
  it('create an instance', () => {
    const pipe = new CreditcardnumberPipe();
    expect(pipe).toBeTruthy();
  });
});
