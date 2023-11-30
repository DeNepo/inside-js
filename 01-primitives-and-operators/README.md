# Primitives and Operators

## 0. Statements vs. Expressions

A short theory lesson about the main difference between _statements_ and
_expressions_, plus a simple strategy for checking if something is a statement
or an expression.

## 1. Primitive Types

Introces the main primitive types in JS using examples - _booleans_, _numbers_,
_strings_, _null_, _undefined_. You will also learn about the `typeof` operator,
and practice predicting the operator's behavior with different values.

## 2. Explicit Coercion

Learn the rules JavaScript follows when converting primitive values to a
different type, practice these rules by predicting the output of different
conversions.

This is one of the most important exercises in the module! _If you do not
understand how explicit type coercion works in JavaScript **implicit coercion**
can feel like a black box. Once you understand how explicit coercion works, it
may still seem illogical but it won't be confusing._

## 3. Common Operators

Explore some of the most common operators in JavaScript by example, and practice
predicting their behavior with assertion tests. You should be comfortable with
**Explicit Coercion** before starting this chapter, otherwise _implicit
coercion_ can feel like a black box!

Operators are grouped into three categories:

1. **Truthiness Operators**: These operators' behavior is determined by the
   _truthiness_ of their inputs. Most operators produce a new value based on
   their inputs, however some of these operators are different because they
   _choose_ one of the inputs instead of producing a new value.
2. **Comparisons**: Learn how JavaScript compares different primitive values
   using examples and assertion tests. Comparisons will always evaluate to
   `true` or `false`!
3. **Arithmetic** Learn about the basic math operators in JavaScript, as well as
   their rules for _implicit coercion_.

## 4. Operator Precedence

Learn how to read, trace and predict JavaScript expressions with more than one
operator. You will learn the rules of _operator precedence_ which determine
which operator will be evaluated first, second, ...

You will also learn to think about _substitution_ when reading and tracing
expressions. Substitution is when you replace an operator with it's result,
making it easier to think about complex expressions one step at a time.

## 5. Increment, Decrement

So far all the operators you learned about work with primitive types and do not
modify variables. They may _read_ values from a variable, but they did not
_modify_ the value stored in memory.

**In-place operators** like _increment_ and _decrement_ are completely
different! They can only be used on variables, not a primitive literal like
`"hello"` or `true`. They also modify the value stored in the variable and give
a result! This makes tracing, predicting and debugging these operators more
challenging.

Increment and Decrement are useful operators, but you need to be careful where
you use them in your programs to keep your code easy to read. Hopefully these
intentionally confusing exercises will help you understand best practices!

## 6. Template Literals

Finally, pull everything together as you learn how _template literals_ work.
This is also a great review of _statements vs. expressions_.

There are no exercises (yet) in this section, but you will have plenty of chance
to practice in the coming chapters.
