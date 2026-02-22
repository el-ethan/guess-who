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
      {categories.map(c => (
        <button key={c} onClick={() => onSelect(c)}>
          {c.replace(/-/g, ' ')}
        </button>
      ))}
    </div>
  )
}
