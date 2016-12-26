import test from 'ava';
import bzz from './';

test('case 1', t => {
  const str = '\n  line1\n    line2\n  line3\n';
  const expected = 'line1\n  line2\nline3';
  const result = bzz(str);
  t.is(result, expected);
  t.pass();
});

test('case 2', t => {
  const str = '\n    line1\n      line2\n    line3\n';
  const expected = '  line1\n    line2\n  line3';
  const result = bzz(str, 2);
  t.is(result, expected);
  t.pass();
});

test('case 3', t => {
  const str = '\n    line1\nline2\n    line3\n';
  const expected = '    line1\nline2\n    line3';
  const result = bzz(str, 2);
  t.is(result, expected);
  t.pass();
});

test('case 4', t => {
  const str = `
    hello
      world
        meow
      moo
    bye
  `;
  const expected = '   hello\n     world\n       meow\n     moo\n   bye';
  const result = bzz(str, 3);
  t.is(result, expected);
  t.pass();
});
