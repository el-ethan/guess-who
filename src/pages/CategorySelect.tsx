import { getAllImages, getCategories, getImagesForCategory } from '../utils/getImages'

interface Props {
  onSelect: (c: string) => void
}

export default function CategorySelect({ onSelect }: Props) {
  const modules = getAllImages()
  const categories = getCategories(modules)
  

  return (
    <div className="menu">
      <h1>Guess Who</h1>
      <div className="category-grid">
        {categories.map(c => {
          const label = c.replace(/_restricted$/, '').replace(/-/g, ' ')
          const images = getImagesForCategory(modules, c)
          const bg = images && images.length ? images[0] : ''

          const handleClick = () => {
            if (c.endsWith('_restricted')) {
              const ok = confirm('this category may contain scary images. Do you want to continue')
              if (ok) onSelect(c)
            } else {
              onSelect(c)
            }
          }

          const handleKey = (e: React.KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              handleClick()
            }
          }

          return (
            <div
              key={c}
              role="button"
              tabIndex={0}
              className="category-card"
              onClick={handleClick}
              onKeyDown={handleKey}
              style={{ backgroundImage: bg ? `url(${bg})` : undefined }}
            >
              <div className="category-label">{label}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
