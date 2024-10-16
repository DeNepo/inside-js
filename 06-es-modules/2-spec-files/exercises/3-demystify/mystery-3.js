const mystery3 = (a) => {
  let b = "";
  for (let c = a.length - 1; c > -1; c--) {
    b = b + a[c];
  }
  return b;
};
