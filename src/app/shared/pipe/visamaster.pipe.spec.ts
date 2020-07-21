import { VisamasterPipe } from './visamaster.pipe';



describe('VisamasterPipe', () => {
  it('create an instance', () => {
    const pipe = new VisamasterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return card type VISA',() => {
    const pipe = new VisamasterPipe();
    let numberMask = pipe.transform("CREDIT_CARD","CREDIT_CARD","4544769920667610")
    expect(numberMask).toEqual('CREDIT_CARD VISA ' )
  })

  it('should return card type MASTERCARD',() => {
    const pipe = new VisamasterPipe();
    let numberMask = pipe.transform("CREDIT_CARD","CREDIT_CARD","5201897302970640")
    expect(numberMask).toEqual('CREDIT_CARD MASTERCARD ' )
  })

});
