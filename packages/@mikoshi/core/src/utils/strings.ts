import Pluralize from 'pluralize'

export function pluralize (s: string) {
  return Pluralize.plural(s)
}

export function singularize (s: string) {
  return Pluralize.singular(s)
}

export function capitalize (s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}
