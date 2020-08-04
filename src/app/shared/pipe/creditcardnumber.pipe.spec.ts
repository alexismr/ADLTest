import { CreditcardnumberPipe } from './creditcardnumber.pipe';

describe('CreditcardnumberPipe', () => {
  it('create an instance', () => {
    const pipe = new CreditcardnumberPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return mask number card is ok',() => {
    const pipe = new CreditcardnumberPipe();
    var value = ["2101108903245784"]
    let numberMask = pipe.transform(value,true)
    expect(numberMask).toEqual('XXXX XXXX XXXX 5784')
  })
});

