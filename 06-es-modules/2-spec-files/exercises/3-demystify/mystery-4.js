const mystery4 = (a) => {
  let b = "";
  for (const c of a) {
    for (let d = 0; d < a.length; d++) {
      if (c === a[d]) {
        b = b + a[d];
      }
    }
  }
  return b;
};
