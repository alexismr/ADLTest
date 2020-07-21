import { StringDatePipe } from './stringdate.pipe';

describe('StringDatePipe', () => {
  it('create an instance', () => {
    const pipe = new StringDatePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return date format DD/MM/YYYY is ok',() => {
    const pipe = new StringDatePipe();
    let numberMask = pipe.transform( "2019-12-26T00:00:00")
    expect(numberMask).toEqual('26/12/2019')
  })

});
