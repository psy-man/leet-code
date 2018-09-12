import { TestHelper } from '../../utils/test-case';


const longestPalindrome3 = (s) => {
  const findMaxPalindrome = (s, from, to) => {
    while (from >= 0 && to <= s.length && s[from] === s[to]) {
      from --;
      to ++;
    }

    return s.slice(from + 1, to);
  };

  if (s.length === 0) {
    return '';
  }

  let i = 0, n = 0;
  let tmp = '';
  let result = '';

  for (i; i < s.length; i += 1) {
    tmp = findMaxPalindrome(s, i, i);
    if (tmp.length > result.length) {
      result = tmp;
    }

    tmp = findMaxPalindrome(s, i, i + 1);
    if (tmp.length > result.length) {
      result = tmp;
    }
  }

  return result || s[0];
};


const longestPalindrome2 = (s) => {
  const findMaxPalindrome = (s, from, to) => {
    while (from >= 0 && to <= s.length && s[--from] === s[++to]) {}
    return [to - from, from + 1, to - 1];
  };

  if (s.length === 0) {
    return '';
  }

  let i = 0, n = 0;
  let len = 0, from = 0, to = 0;

  let repeatedChars = '';
  let result = '';

  for (i; i < s.length; i += 1) {
    const char = s[i];

    repeatedChars = '';
    n = i;
    while (s[n++] === char) {
      repeatedChars += char;
    }

    if (repeatedChars.length > 1) {
      [len, from, to] = findMaxPalindrome(s, i, i + repeatedChars.length - 1);
    } else if (char === s[i + 2]) {
      [len, from, to] = findMaxPalindrome(s, i, i + 2);
    }

    if (len > result.length) {
      result = s.slice(from, to + 1);
    }
  }

  return result || s[0];
};


const longestPalindrome1 = (s) => {
  const isPalindrome = (s, from, to) => {
    while (from <= to) {
      if (s[from++] !== s[to--]) {
        return false;
      }
    }

    return true;
  };

  if (s.length === 0) {
    return '';
  }

  let i = 0;
  let result = '';
  let ss = '';

  for (i; i < s.length; i += 1) {
    const char = s[i];

    ss = '';

    let n = i;
    while(s[n++] === char) {
      ss += char;
    }

    if (ss === s) {
      return s;
    }

    if (ss.length > result.length) {
      result = ss;
    }

    let last = s.length;

    while (last > i) {
      const index = s.lastIndexOf(ss, last - 1);
      if (index === i) {
        break;
      }

      if (index > -1) {

        if (isPalindrome(s, i, index + ss.length - 1)) {
          if (index + ss.length - i + 1 > result.length) {
            result = s.slice(i, index + ss.length);
          }
        }
      }

      last = index;
    }
  }

  return result.length ? result : s[0];
};


//////////////// Tests //////////////////////

describe('longestPalindrome', () => {
  const test = new TestHelper();

  test.expect('').toEqual('');
  test.expect('a').toEqual('a');
  test.expect('ac').toEqual('a');
  test.expect('ccd').toEqual('cc');
  test.expect('cbbd').toEqual('bb');
  test.expect('tattarrattat').toEqual('tattarrattat');
  test.expect('1i090izxc1dcxz1').toEqual('i090i');
  test.expect('1i090izxc1cxz1').toEqual('zxc1cxz');
  test.expect('acccccccccccc').toEqual('cccccccccccc');
  test.expect('dddd').toEqual('dddd');
  test.expect('kkk').toEqual('kkk');
  test.expect('aaabaaaa').toEqual('aaabaaa');
  test.expect('aaaabaaa').toEqual('aaabaaa');
  test.expect('abacab').toEqual('bacab');
  test.expect('kyyrjtdplseovzwjkykrjwhxquwxsfsorjiumvxjhjmgeueafubtonhlerrgsgohfosqssmizcuqryqomsipo' +
    'vhhodpfyudtusjhonlqabhxfahfcjqxyckycstcqwxvicwkjeuboerkmjshfgiglceycmycadpnvoeaurqatesivajoqdilynbcihnidbizwkuaoegmyt' +
    'opzdmvvoewvhebqzskseeubnretjgnmyjwwgcooytfojeuzcuyhsznbcaiqpwcyusyyywqmmvqzvvceylnuwcbxybhqpvjumzomnabrjgcfaabqmiotlf' +
    'ojnyuolostmtacbwmwlqdfkbfikusuqtupdwdrjwqmuudbcvtpieiwteqbeyfyqejglmxofdjksqmzeugwvuniaxdrunyunnqpbnfbgqemvamaxuhjbyz' +
    'qmhalrprhnindrkbopwbwsjeqrmyqipnqvjqzpjalqyfvaavyhytetllzupxjwozdfpmjhjlrnitnjgapzrakcqahaqetwllaaiadalmxgvpawqpgecoj' +
    'xfvcgxsbrldktufdrogkogbltcezflyctklpqrjymqzyzmtlssnavzcquytcskcnjzzrytsvawkavzboncxlhqfiofuohehaygxidxsofhmhzygklliov' +
    'nwqbwwiiyarxtoihvjkdrzqsnmhdtdlpckuayhtfyirnhkrhbrwkdymjrjklonyggqnxhfvtkqxoicakzsxmgczpwhpkzcntkcwhkdkxvfnjbvjjoumcz' +
    'jyvdgkfukfuldolqnauvoyhoheoqvpwoisniv')
    .toEqual('qahaq');

  test.execute(longestPalindrome1, longestPalindrome2, longestPalindrome3);
});
