import { useState } from 'react'
import CategorySelect from './pages/CategorySelect'
import Game from './pages/Game'

export default function App() {
  const [category, setCategory] = useState<string | null>(null)

  return category ? (
    <Game category={category} goBack={() => setCategory(null)} />
  ) : (
    <CategorySelect onSelect={setCategory} />
  )
}
