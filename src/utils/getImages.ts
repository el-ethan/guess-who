export function getAllImages() {
  const modules = import.meta.glob('/public/characters/**/*.{png,jpg,jpeg,webp,avif,gif,svg}', {
    eager: true,
    as: 'url',
  }) as Record<string, string>

  return modules
}

export function getCategories(modules: Record<string, string>): string[] {
  const set = new Set<string>()

  Object.keys(modules).forEach(path => {
    const match = path.match(/characters\/(.*?)\//)
    if (match) set.add(match[1])
  })

  return Array.from(set).sort()
}

export function getImagesForCategory(modules: Record<string, string>, category: string) {
  return Object.entries(modules)
    .filter(([path]) => path.includes(`/characters/${category}/`))
    .map(([, url]) => url)
    .sort()
}
