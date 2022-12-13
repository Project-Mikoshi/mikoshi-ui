export function getCurrentRoute (): string | undefined {
  const pathName = window.location.pathname.split('/').pop()
  if (!pathName || pathName === '') {
    return undefined
  }

  return `/${pathName}`
}
