const _0x2d7107 = _0x3708;
function _0x3708(_0xf523ae, _0x513d89) {
  const _0x1a5121 = _0x1a51();
  return (
    (_0x3708 = function (_0x37087a, _0x1893f0) {
      _0x37087a = _0x37087a - 0x19c;
      let _0x10c353 = _0x1a5121[_0x37087a];
      return _0x10c353;
    }),
    _0x3708(_0xf523ae, _0x513d89)
  );
}
(function (_0x376ac4, _0x19a403) {
  const _0x48a108 = _0x3708,
    _0x319f3d = _0x376ac4();
  while (!![]) {
    try {
      const _0x5b568b =
        (parseInt(_0x48a108(0x1c5)) / 0x1) *
          (-parseInt(_0x48a108(0x1ba)) / 0x2) +
        parseInt(_0x48a108(0x1cf)) / 0x3 +
        (parseInt(_0x48a108(0x1c4)) / 0x4) *
          (parseInt(_0x48a108(0x1a8)) / 0x5) +
        (parseInt(_0x48a108(0x1b1)) / 0x6) *
          (-parseInt(_0x48a108(0x1b0)) / 0x7) +
        parseInt(_0x48a108(0x19e)) / 0x8 +
        -parseInt(_0x48a108(0x1a4)) / 0x9 +
        (-parseInt(_0x48a108(0x1ae)) / 0xa) *
          (-parseInt(_0x48a108(0x1bc)) / 0xb);
      if (_0x5b568b === _0x19a403) break;
      else _0x319f3d['push'](_0x319f3d['shift']());
    } catch (_0x408801) {
      _0x319f3d['push'](_0x319f3d['shift']());
    }
  }
})(_0x1a51, 0x19fde);
function _0x1a51() {
  const _0x3f7696 = [
    '68154hxlNKA',
    'type',
    'BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz',
    'join',
    'length',
    'value',
    '\x0a-\x20',
    'time',
    'try\x20using\x20one\x20of\x20these\x20types\x20instead:\x0a-\x20',
    '242912LIDYUe',
    'checkbox',
    '31482CRYNRd',
    'string',
    'includes',
    '\x20is\x20not\x20for\x20displaying\x20data\x0a',
    'range',
    'password',
    'tel',
    'these',
    '81996XNBBIH',
    '1tqcsTi',
    'to-remove',
    'week',
    'SELECT',
    'getElementById',
    'color',
    'consonants',
    'secret-solution',
    'date',
    '-\x20or\x20changing\x20it\x20to\x20a\x20different\x20element\x20or\x20input\x20type',
    '477675fdwFih',
    'aeiouAEIOu',
    'there\x20is\x20no\x20element\x20with\x20id\x20\x22',
    '\x20is\x20not\x20an\x20<input>\x20element',
    'hidden',
    'click',
    'replaceAll',
    'url',
    '288480AXBUCb',
    'text',
    'id\x20is\x20not\x20a\x20string\x20(first\x20argument)',
    'no\x20arg',
    'input',
    'number',
    '949275oLTVHm',
    'you\x20did\x20not\x20pass\x20an\x20element\x20id\x20(first\x20argument)',
    'vowels',
    'nodeName',
    '5JDBAEb',
    'innerHTML',
    'INPUT',
    'addEventListener',
    'toLowerCase',
    'datetime-local',
    '530kMwiHm',
    'strings',
    '21jVvnge',
  ];
  _0x1a51 = function () {
    return _0x3f7696;
  };
  return _0x1a51();
}
{
  const STRING_INPUTS = [
      _0x2d7107(0x19f),
      'email',
      _0x2d7107(0x1c1),
      'search',
      'radio',
      _0x2d7107(0x19d),
      _0x2d7107(0x1c2),
      _0x2d7107(0x1cd),
      _0x2d7107(0x1b8),
      'month',
      _0x2d7107(0x1c7),
      _0x2d7107(0x1ad),
      _0x2d7107(0x1ca),
      _0x2d7107(0x1d3),
    ],
    BOOLEAN_INPUTS = [_0x2d7107(0x1bb)],
    NUMBER_INPUTS = [_0x2d7107(0x1a3), _0x2d7107(0x1c0)],
    NO_ARG = Symbol(_0x2d7107(0x1a1)),
    NO_ID = _0x2d7107(0x1a5),
    INVALID_ID = _0x2d7107(0x1a0),
    wrongInputMessage = ({
      type: type = _0x2d7107(0x1af),
      id: id = '',
      allowed: allowed = [],
      name: name = _0x2d7107(0x1a2),
    }) =>
      '' +
      name[_0x2d7107(0x1ac)]() +
      (id ? '#' + id : '') +
      '\x20is\x20not\x20for\x20' +
      type +
      '.\x0a' +
      (allowed && allowed[_0x2d7107(0x1b5)] > 0x0
        ? _0x2d7107(0x1b9) + allowed[_0x2d7107(0x1b4)](_0x2d7107(0x1b7))
        : '') +
      '\x0a',
    readString = (_0x453fde = NO_ARG) => {
      const _0x1a8330 = _0x2d7107;
      if (_0x453fde === NO_ARG) throw new Error(NO_ID);
      if (typeof _0x453fde !== _0x1a8330(0x1bd))
        throw new TypeError(INVALID_ID);
      const _0x338944 = document[_0x1a8330(0x1c9)](_0x453fde);
      if (_0x338944 === null)
        throw new Error(_0x1a8330(0x1d1) + _0x453fde + '\x22');
      if (_0x338944[_0x1a8330(0x1a7)] !== 'INPUT')
        throw new TypeError(
          _0x338944['nodeName'][_0x1a8330(0x1ac)]() +
            '#' +
            _0x453fde +
            _0x1a8330(0x1d2),
        );
      if (!STRING_INPUTS['includes'](_0x338944[_0x1a8330(0x1b2)]))
        throw new TypeError(
          wrongInputMessage({
            allowed: STRING_INPUTS,
            name: _0x338944['nodeName'],
            id: _0x338944['id'],
          }),
        );
      return _0x338944[_0x1a8330(0x1b6)] || '';
    },
    display = (_0x21148e = NO_ARG, _0x21e84d = NO_ARG) => {
      const _0x5c88cf = _0x2d7107;
      if (_0x21148e === NO_ARG) throw new Error(NO_ID);
      if (typeof _0x21148e !== _0x5c88cf(0x1bd))
        throw new TypeError(INVALID_ID);
      if (_0x21e84d === NO_ARG)
        throw new Error(
          'you\x20did\x20not\x20pass\x20a\x20value\x20to\x20display\x20(second\x20argument)',
        );
      const _0x56d883 = document[_0x5c88cf(0x1c9)](_0x21148e);
      if (_0x56d883 === null)
        throw new Error(_0x5c88cf(0x1d1) + _0x21148e + '\x22');
      if (
        _0x56d883[_0x5c88cf(0x1a7)] === 'OPTION' ||
        _0x56d883[_0x5c88cf(0x1a7)] === _0x5c88cf(0x1c8) ||
        (_0x56d883[_0x5c88cf(0x1a7)] === _0x5c88cf(0x1aa) &&
          (STRING_INPUTS[_0x5c88cf(0x1be)](_0x56d883['type']) ||
            BOOLEAN_INPUTS[_0x5c88cf(0x1be)](_0x56d883['type']) ||
            NUMBER_INPUTS[_0x5c88cf(0x1be)](_0x56d883['type'])))
      )
        throw new Error(
          _0x56d883[_0x5c88cf(0x1a7)] +
            '#' +
            _0x21148e +
            _0x5c88cf(0x1bf) +
            '-\x20try\x20using\x20a\x20\x22set\x22\x20function\x20to\x20update\x20it\x27s\x20value' +
            _0x5c88cf(0x1ce),
        );
      _0x56d883[_0x5c88cf(0x1a9)] = _0x21e84d;
    },
    removeCharacters = (_0x21f87b = '', _0x24a6a4 = '') => {
      const _0x5a6f6d = _0x2d7107;
      let _0x20fbdf = _0x21f87b;
      for (const _0x10cef4 of _0x24a6a4) {
        _0x20fbdf = _0x20fbdf[_0x5a6f6d(0x19c)](_0x10cef4, '');
      }
      return _0x20fbdf;
    },
    removeConsonants = () => {
      const _0x37e796 = _0x2d7107;
      debugger;
      const _0x24dae6 = readString('user-text'),
        _0x51a878 = removeCharacters(_0x24dae6, _0x37e796(0x1b3));
      display(_0x37e796(0x1cc), _0x51a878);
    };
  document['getElementById'](_0x2d7107(0x1cb))['addEventListener'](
    _0x2d7107(0x1d4),
    removeConsonants,
  );
  const removeThese = () => {
    const _0x32ab13 = _0x2d7107;
    debugger;
    const _0x49428d = readString('user-text'),
      _0x252db9 = readString(_0x32ab13(0x1c6)),
      _0x4f4dea = removeCharacters(_0x49428d, _0x252db9);
    display(_0x32ab13(0x1cc), _0x4f4dea);
  };
  document[_0x2d7107(0x1c9)](_0x2d7107(0x1c3))[_0x2d7107(0x1ab)](
    'click',
    removeThese,
  );
  const removeVowels = () => {
    const _0x463f37 = _0x2d7107;
    debugger;
    const _0x2970d1 = readString('user-text'),
      _0x5f3946 = removeCharacters(_0x2970d1, _0x463f37(0x1d0));
    display('secret-solution', _0x5f3946);
  };
  document[_0x2d7107(0x1c9)](_0x2d7107(0x1a6))[_0x2d7107(0x1ab)](
    'click',
    removeVowels,
  );
}
