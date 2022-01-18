import { HelloWorld } from '../../src/models/helloWorld';

test('test', () => {
    expect(new HelloWorld('Test').show()).toBe('Hello Test!!');
});
