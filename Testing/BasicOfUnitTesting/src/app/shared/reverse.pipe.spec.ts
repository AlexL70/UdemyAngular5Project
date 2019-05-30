import { ReversePipe } from "./reverse.pipe";

describe('Reverse pipe test', () => {
  it('reverse string', () => {
    const reversePipe = new ReversePipe();
    const s = 'string';
    const reversed = reversePipe.transform(s);
    expect(reversed).toEqual('gnirts');
  });
});
