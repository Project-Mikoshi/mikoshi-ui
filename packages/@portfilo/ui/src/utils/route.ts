export function getCurrentRoute (): string {
  return `/${window.location.pathname.split('/').pop()}`
}
