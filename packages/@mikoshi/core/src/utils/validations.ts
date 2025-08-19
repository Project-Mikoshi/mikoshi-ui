export function isPresent (value: unknown): boolean {
  if (isNone(value) || isEmpty(value) || isBlank(value)) {
    return false
  }

  if (typeof value === 'boolean') {
    return value
  }

  return true
}

export function isBlank (value: unknown): boolean {
  if (isEmpty(value))  {
    return true
  }

  if (typeof value === 'string' && value.trim().length === 0) {
    return true
  }

  return false
}

export function isEmpty (value: unknown): boolean {
  if (isNone(value)) {
    return true
  }

  if (typeof value === 'object' && ((value as any).length === 0 || (value as any).size === 0))  {
    return true
  }

  if (typeof value === 'string' && value.length === 0) {
    return true
  }

  return false
}

export function isNone (value: unknown): boolean {
  return value === null || value === undefined
}
