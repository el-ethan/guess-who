function hash(str: string): number {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24)
  }
  return Math.abs(h)
}

export function getSeededIndex(category: string, player: number, count: number): number {
  const minuteBucket = Math.floor(Date.now() / 60000)
  const seed = `${category}`
  return hash(seed) % count
}
