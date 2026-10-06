import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

const exampleItems = [
  { name: 'Áo thun', price: 180000, qty: 2 },
  { name: 'Sổ tay', price: 45000, qty: 1 },
]

const exampleOptions = {
  vatRate: 0.08,
  freeShipFrom: 500000,
  shipFee: 30000,
}

test('returns 467400 for the worked example', () => {
  assert.equal(cartTotal(exampleItems, exampleOptions), 467400)
})

test('returns zero for an empty cart without adding charges', () => {
  assert.equal(cartTotal([], exampleOptions), 0)
})

test('applies free shipping at the exact threshold', () => {
  const items = [{ price: 500000, qty: 1 }]

  assert.equal(cartTotal(items, exampleOptions), 540000)
})

test('adds the shipping fee below the threshold', () => {
  const items = [{ price: 499999, qty: 1 }]
  const options = { vatRate: 0, freeShipFrom: 500000, shipFee: 30000 }

  assert.equal(cartTotal(items, options), 529999)
})

test('rounds a fractional total to the nearest whole dong', () => {
  const items = [{ price: 10, qty: 1 }]
  const options = { vatRate: 0.055, freeShipFrom: 100, shipFee: 0 }

  assert.equal(cartTotal(items, options), 11)
})

test('returns the total as a number', () => {
  const items = [{ price: 10, qty: 1 }]
  const options = { vatRate: 0.055, freeShipFrom: 100, shipFee: 0 }

  assert.equal(typeof cartTotal(items, options), 'number')
})

test('throws RangeError when a later item has a negative price', () => {
  const items = [
    { price: 10, qty: 1 },
    { price: -1, qty: 1 },
  ]

  assert.throws(() => cartTotal(items, exampleOptions), RangeError)
})

test('throws RangeError when quantity is zero', () => {
  const items = [{ price: 10, qty: 0 }]

  assert.throws(() => cartTotal(items, exampleOptions), RangeError)
})

test('throws RangeError when quantity is negative', () => {
  const items = [{ price: 10, qty: -1 }]

  assert.throws(() => cartTotal(items, exampleOptions), RangeError)
})

test('throws RangeError when quantity is fractional', () => {
  const items = [{ price: 10, qty: 1.5 }]

  assert.throws(() => cartTotal(items, exampleOptions), RangeError)
})
