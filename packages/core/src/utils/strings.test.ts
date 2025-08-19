import { describe, expect, it } from 'vitest'
import {
  singularize,
  pluralize,
  capitalize
} from '@/utils/strings'

describe('unit/strings', () => {
  it('should correct pluralize and singularize word', () => {
    const TEST_CASES = [
      { single: 'advice', plural: 'advice' },
      { single: 'cow', plural: 'cows' },
      { single: 'formula', plural: 'formulas' },
      { single: 'child', plural: 'children' },
      { single: 'person', plural: 'people' },
      { single: 'man', plural: 'men' },
      { single: 'woman', plural: 'women' },
      { single: '', plural: '' }
    ]

    TEST_CASES.forEach(CASE => {
      expect(pluralize(CASE.single)).to.equal(CASE.plural)
      expect(singularize(CASE.plural)).to.equal(CASE.single)
    })
  })

  it('should correct capitalize word', () => {
    const TEST_CASES = [
      { word: 'innerHTML', capitalized: 'InnerHTML' },
      { word: 'action_name', capitalized: 'Action_name' },
      { word: 'my favorite items', capitalized: 'My favorite items' },
      { word: 'privateDocs/ownerInvoice', capitalized: 'PrivateDocs/ownerInvoice' },
      { word: '', capitalized: '' }
    ]

    TEST_CASES.forEach(CASE => expect(capitalize(CASE.word)).to.equal(CASE.capitalized))
  })
})