# Refactoring Truthiness Operators

You might already noticed that `&&`, `||` and `_?_:_` are different from the
other operators such as `+`, `===`, `!` or `>=`. One way to gain a deeper
understanding of these _truthiness operators_ is to practice refactoring them to
conditionals and back. This will help you to understand _short circuiting_ and
how logical operators are similar to control flow.

What makes the truthiness operators unique is that they do not _produce_ a new
value, they do not change the values that are passed in. Instead they make a
decision about which value to use.
