# Implementation Brief: `cartTotal`

## Allowed files

During the implementation loop, modify only:

- `src/cart.js` for production code
- `test/cart.test.js` for contract tests

Do not add dependencies or create alternative implementations.

## Contract

Implement and export `cartTotal(items, options)` from `src/cart.js`.

- `items` is an array of objects shaped like `{ name, price, qty }`.
- `options` is shaped like `{ vatRate, freeShipFrom, shipFee }`.
- Compute the subtotal as the sum of `price * qty`.
- Compute VAT as `subtotal * vatRate`.
- Shipping is `0` when `subtotal >= freeShipFrom`; otherwise use `shipFee`.
- Return `subtotal + VAT + shipping`, rounded to the nearest whole dong.
- Return a JavaScript number, not a formatted string.
- Return `0` for an empty cart, with no VAT or shipping.
- Throw `RangeError` when any `price` is negative.
- Throw `RangeError` when any `qty` is not a positive integer, including
  zero, negative, and fractional values.

The worked example must return `467400`:

```js
cartTotal(
  [
    { name: 'Ao thun', price: 180000, qty: 2 },
    { name: 'So tay', price: 45000, qty: 1 },
  ],
  { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 },
)
```

## Tests

Use `node:test` and `node:assert/strict`. Keep independent tests for the worked
example, empty cart, exact free-shipping threshold, shipping below the
threshold, whole-dong rounding with a numeric result, negative price, and
zero, negative, and fractional quantities. Each test must be able to fail for
one clear contract violation.

## Constraints and gates

- Plain JavaScript only; no dependencies.
- Do not use `toFixed()`.
- Run `npm test` and `npm run lint` before completion.
- Read the implementation diff before accepting the result.
