import { describe, expect, it } from 'vitest'
import {
  isPresent,
  isEmpty,
  isBlank,
  isNone
} from '@/utils/validations'

describe('unit/validations', () => {
  it('should correct check whether a value is present', () => {
    const TEST_CASES = [
      // falsy
      { value: null, expect: false },
      { value: undefined, expect: false },
      { value: '', expect: false },
      { value: '  ', expect: false },
      { value: '\n\t', expect: false },
      { value: [], expect: false },
      { value: { length: 0 }, expect: false },
      { value: false, expect: false },
      // truthy
      { value: true, expect: true },
      { value: {}, expect: true },
      { value: 'string', expect: true },
      { value: function() {}, expect: true },
      { value: '\n\t Hello', expect: true },
      { value: [1, 2, 3], expect: true }
    ]

    TEST_CASES.forEach(CASE => {
      expect(isPresent(CASE.value)).to.equal(CASE.expect)
    })
  })

  it('should correct check whether a value is blank', () => {
    const TEST_CASES = [
      // falsy
      { value: 'string', expect: false },
      { value: function() {}, expect: false },
      { value: [1, 2, 3], expect: false },
      { value: false, expect: false },
      { value: true, expect: false },
      { value: {}, expect: false },
      // truthy
      { value: null, expect: true },
      { value: undefined, expect: true },
      { value: '', expect: true },
      { value: [], expect: true },
      { value: '\n\t', expect: true },
      { value: '  ', expect: true }
    ]

    TEST_CASES.forEach(CASE => {
      expect(isBlank(CASE.value)).to.equal(CASE.expect)
    })
  })

  it('should correct check whether a value is empty', () => {
    const TEST_CASES = [
      // falsy
      { value: 'string', expect: false },
      { value: '  ', expect: false },
      { value: '\n\t', expect: false },
      { value: function() {}, expect: false },
      { value: '\n\t Hello', expect: false },
      { value: [1, 2, 3], expect: false },
      { value: { size: 1 }, expect: false },
      { value: { size: () => 0 }, expect: false },
      { value: false, expect: false },
      { value: true, expect: false },
      { value: {}, expect: false },
      // truthy
      { value: null, expect: true },
      { value: undefined, expect: true },
      { value: '', expect: true },
      { value: [], expect: true },
      { value: { length: 0 }, expect: true },
      { value: { size: 0 }, expect: true }
    ]

    TEST_CASES.forEach(CASE => {
      expect(isEmpty(CASE.value)).to.equal(CASE.expect)
    })
  })

  it('should correct check whether a value is none', () => {
    const TEST_CASES = [
      // falsy
      { value: '', expect: false },
      { value: [], expect: false },
      { value: 'string', expect: false },
      { value: '', expect: false },
      { value: function() {}, expect: false },
      { value: [1, 2, 3], expect: false },
      { value: false, expect: false },
      { value: true, expect: false },
      { value: {}, expect: false },
      // truthy
      { value: null, expect: true },
      { value: undefined, expect: true }
    ]

    TEST_CASES.forEach(CASE => {
      expect(isNone(CASE.value)).to.equal(CASE.expect)
    })
  })
})