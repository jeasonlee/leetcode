import subLoopStr from '../../code/regexp/lesson1'

test('subLoopStr', () => {
  expect(subLoopStr('abab')).toBe(true)
})
test('subLoopStr:2', () => {
  expect(subLoopStr('abababc')).toBe(false)
})
test('subLoopStr:3', () => {
  expect(subLoopStr('ab')).toBe(false)
})
test('subLoopStr:4', () => {
  expect(subLoopStr('abcabcabc')).toBe(true)
})
