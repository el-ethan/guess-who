import { getAllImages, getCategories } from '../utils/getImages'

interface Props {
  onSelect: (c: string) => void
}

export default function CategorySelect({ onSelect }: Props) {
  const modules = getAllImages()
  const categories = getCategories(modules)
  

  return (
    <div className="menu">
      <h1>Guess Who</h1>
      {categories.map(c => {
        const label = c.replace(/_restricted$/, '').replace(/-/g, ' ')
        const handleClick = () => {
          if (c.endsWith('_restricted')) {
            const ok = confirm('this category may contain scary images. Do you want to continue')
            if (ok) onSelect(c)
          } else {
            onSelect(c)
          }
        }

        return (
          <button key={c} onClick={handleClick}>
            {label}
          </button>
        )
      })}
    </div>
  )
}
