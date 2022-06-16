const _0x1410a1 = _0x15ff;
(function (_0xf56471, _0x261cac) {
  const _0x1b32e1 = _0x15ff,
    _0x50c906 = _0xf56471();
  while (!![]) {
    try {
      const _0x5756ef =
        (-parseInt(_0x1b32e1(0x1fe)) / 0x1) *
          (-parseInt(_0x1b32e1(0x211)) / 0x2) +
        (parseInt(_0x1b32e1(0x215)) / 0x3) *
          (-parseInt(_0x1b32e1(0x1ee)) / 0x4) +
        parseInt(_0x1b32e1(0x1f4)) / 0x5 +
        parseInt(_0x1b32e1(0x217)) / 0x6 +
        -parseInt(_0x1b32e1(0x1f0)) / 0x7 +
        -parseInt(_0x1b32e1(0x1ec)) / 0x8 +
        (parseInt(_0x1b32e1(0x212)) / 0x9) * (parseInt(_0x1b32e1(0x1ef)) / 0xa);
      if (_0x5756ef === _0x261cac) break;
      else _0x50c906['push'](_0x50c906['shift']());
    } catch (_0x53682e) {
      _0x50c906['push'](_0x50c906['shift']());
    }
  }
})(_0x54ef, 0xc5dab);
function _0x15ff(_0x48b7ea, _0x31ada3) {
  const _0x54ef59 = _0x54ef();
  return (
    (_0x15ff = function (_0x15ff5c, _0x316213) {
      _0x15ff5c = _0x15ff5c - 0x1e7;
      let _0x255414 = _0x54ef59[_0x15ff5c];
      return _0x255414;
    }),
    _0x15ff(_0x48b7ea, _0x31ada3)
  );
}
{
  const STRING_INPUTS = [
      _0x1410a1(0x207),
      _0x1410a1(0x1e7),
      'password',
      _0x1410a1(0x1f3),
      _0x1410a1(0x208),
      'url',
      _0x1410a1(0x1fd),
      _0x1410a1(0x201),
      'time',
      _0x1410a1(0x1f8),
      _0x1410a1(0x1eb),
      _0x1410a1(0x21b),
      _0x1410a1(0x218),
      _0x1410a1(0x1f5),
    ],
    BOOLEAN_INPUTS = [_0x1410a1(0x214)],
    NUMBER_INPUTS = [_0x1410a1(0x209), _0x1410a1(0x1e9)],
    NO_ARG = Symbol(_0x1410a1(0x21a)),
    NO_ID = _0x1410a1(0x20a),
    INVALID_ID = 'id\x20is\x20not\x20a\x20string\x20(first\x20argument)',
    wrongInputMessage = ({
      type: type = 'strings',
      id: id = '',
      allowed: allowed = [],
      name: name = _0x1410a1(0x216),
    }) =>
      '' +
      name['toLowerCase']() +
      (id ? '#' + id : '') +
      _0x1410a1(0x210) +
      type +
      '.\x0a' +
      (allowed && allowed[_0x1410a1(0x219)] > 0x0
        ? 'try\x20using\x20one\x20of\x20these\x20types\x20instead:\x0a-\x20' +
          allowed['join'](_0x1410a1(0x1f6))
        : '') +
      '\x0a',
    readString = (_0x5e9da5 = NO_ARG) => {
      const _0x42d307 = _0x1410a1;
      if (_0x5e9da5 === NO_ARG) throw new Error(NO_ID);
      if (typeof _0x5e9da5 !== _0x42d307(0x203))
        throw new TypeError(INVALID_ID);
      const _0x2b7c51 = document[_0x42d307(0x1f1)](_0x5e9da5);
      if (_0x2b7c51 === null)
        throw new Error(_0x42d307(0x20c) + _0x5e9da5 + '\x22');
      if (_0x2b7c51[_0x42d307(0x1ff)] !== 'INPUT')
        throw new TypeError(
          _0x2b7c51[_0x42d307(0x1ff)][_0x42d307(0x1f9)]() +
            '#' +
            _0x5e9da5 +
            _0x42d307(0x1fa),
        );
      if (!STRING_INPUTS['includes'](_0x2b7c51[_0x42d307(0x1fb)]))
        throw new TypeError(
          wrongInputMessage({
            allowed: STRING_INPUTS,
            name: _0x2b7c51[_0x42d307(0x1ff)],
            id: _0x2b7c51['id'],
          }),
        );
      return _0x2b7c51[_0x42d307(0x20b)] || '';
    },
    display = (_0x56fa14 = NO_ARG, _0x2b6c48 = NO_ARG) => {
      const _0x4048a9 = _0x1410a1;
      if (_0x56fa14 === NO_ARG) throw new Error(NO_ID);
      if (typeof _0x56fa14 !== 'string') throw new TypeError(INVALID_ID);
      if (_0x2b6c48 === NO_ARG) throw new Error(_0x4048a9(0x1f7));
      const _0x622bda = document[_0x4048a9(0x1f1)](_0x56fa14);
      if (_0x622bda === null)
        throw new Error(
          'there\x20is\x20no\x20element\x20with\x20id\x20\x22' +
            _0x56fa14 +
            '\x22',
        );
      if (
        _0x622bda[_0x4048a9(0x1ff)] === _0x4048a9(0x20f) ||
        _0x622bda[_0x4048a9(0x1ff)] === _0x4048a9(0x1f2) ||
        (_0x622bda['nodeName'] === _0x4048a9(0x21c) &&
          (STRING_INPUTS[_0x4048a9(0x206)](_0x622bda[_0x4048a9(0x1fb)]) ||
            BOOLEAN_INPUTS['includes'](_0x622bda[_0x4048a9(0x1fb)]) ||
            NUMBER_INPUTS[_0x4048a9(0x206)](_0x622bda['type'])))
      )
        throw new Error(
          _0x622bda[_0x4048a9(0x1ff)] +
            '#' +
            _0x56fa14 +
            _0x4048a9(0x213) +
            _0x4048a9(0x205) +
            _0x4048a9(0x204),
        );
      _0x622bda[_0x4048a9(0x202)] = _0x2b6c48;
    },
    readSelection = (_0xb29b29 = NO_ARG) => {
      const _0x429363 = _0x1410a1;
      if (_0xb29b29 === NO_ARG) throw new Error(NO_ID);
      if (typeof _0xb29b29 !== _0x429363(0x203))
        throw new TypeError(INVALID_ID);
      const _0x79dba = document[_0x429363(0x1f1)](_0xb29b29);
      if (_0x79dba === null)
        throw new Error(_0x429363(0x20c) + _0xb29b29 + '\x22');
      if (_0x79dba[_0x429363(0x1ff)] === _0x429363(0x20f))
        throw new TypeError(_0x429363(0x20d));
      if (_0x79dba[_0x429363(0x1ff)] !== 'SELECT')
        throw new TypeError(
          _0x79dba[_0x429363(0x1ff)][_0x429363(0x1f9)]() +
            '#' +
            _0xb29b29 +
            _0x429363(0x1fc),
        );
      return _0x79dba[_0x429363(0x20b)] || '';
    },
    reverseWordOrPhrase = () => {
      const _0x4618b9 = _0x1410a1;
      debugger;
      const _0x258902 = readString('user-text'),
        _0x26be2e = readSelection(_0x4618b9(0x1e8));
      let _0x20500c = '';
      if (_0x26be2e === 'each') {
        const _0xd9ece1 = _0x258902['split']('\x20'),
          _0x4bfce6 = [];
        for (const _0x2cc015 of _0xd9ece1) {
          let _0x31a21a = '';
          for (const _0x34ebfc of _0x2cc015) {
            _0x31a21a = _0x34ebfc + _0x31a21a;
          }
          _0x4bfce6[_0x4618b9(0x20e)](_0x31a21a);
        }
        _0x20500c = _0x4bfce6[_0x4618b9(0x1ea)]('\x20');
      } else {
        let _0x1884d7 = '';
        for (const _0x22d987 of _0x258902) {
          _0x1884d7 = _0x22d987 + _0x1884d7;
        }
        _0x20500c = _0x1884d7;
      }
      display(_0x4618b9(0x200), _0x20500c);
    };
  document[_0x1410a1(0x1f1)]('do-it')[_0x1410a1(0x1ed)](
    'click',
    reverseWordOrPhrase,
  );
}
function _0x54ef() {
  const _0x44f6da = [
    'you\x20did\x20not\x20pass\x20an\x20element\x20id\x20(first\x20argument)',
    'value',
    'there\x20is\x20no\x20element\x20with\x20id\x20\x22',
    'do\x20not\x20read\x20the\x20<option>\x20element\x20directly,\x20read\x20the\x20parent\x20<select>\x20instead',
    'push',
    'OPTION',
    '\x20is\x20not\x20for\x20',
    '508rMxSMw',
    '8659368mWfBVE',
    '\x20is\x20not\x20for\x20displaying\x20data\x0a',
    'checkbox',
    '6mPxgUa',
    'input',
    '2910144ncjSUz',
    'color',
    'length',
    'no\x20arg',
    'datetime-local',
    'INPUT',
    'email',
    'reverse-type',
    'range',
    'join',
    'week',
    '10783864fYcxPG',
    'addEventListener',
    '2695100EkJLcu',
    '30xCNEPh',
    '8695505RRAwmE',
    'getElementById',
    'SELECT',
    'search',
    '5129525HpNbUo',
    'hidden',
    '\x0a-\x20',
    'you\x20did\x20not\x20pass\x20a\x20value\x20to\x20display\x20(second\x20argument)',
    'month',
    'toLowerCase',
    '\x20is\x20not\x20an\x20<input>\x20element',
    'type',
    '\x20is\x20not\x20a\x20<select>\x20element',
    'tel',
    '1381RnjSSZ',
    'nodeName',
    'secret-solution',
    'date',
    'innerHTML',
    'string',
    '-\x20or\x20changing\x20it\x20to\x20a\x20different\x20element\x20or\x20input\x20type',
    '-\x20try\x20using\x20a\x20\x22set\x22\x20function\x20to\x20update\x20it\x27s\x20value',
    'includes',
    'text',
    'radio',
    'number',
  ];
  _0x54ef = function () {
    return _0x44f6da;
  };
  return _0x54ef();
}
