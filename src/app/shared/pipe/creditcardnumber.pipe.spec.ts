import { CreditcardnumberPipe } from './creditcardnumber.pipe';

describe('CreditcardnumberPipe', () => {
  it('create an instance', () => {
    const pipe = new CreditcardnumberPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return mask number card is ok',() => {
    const pipe = new CreditcardnumberPipe();
    var args = ["210110890324"]
    let numberMask = pipe.transform(true,args)
    expect(numberMask).toEqual('XXXX XXXX XXXX 0324')
  })
});

