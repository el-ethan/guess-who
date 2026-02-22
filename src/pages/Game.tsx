import { useEffect, useState } from 'react'
import Grid from '../components/Grid'
import PlayerToggle from '../components/PlayerToggle'
import { getAllImages, getImagesForCategory } from '../utils/getImages'

interface Props {
  category: string
  goBack: () => void
}

export default function Game({ category, goBack }: Props) {
  const modules = getAllImages()

  const [player, setPlayer] = useState(1)
  const [images, setImages] = useState<string[]>([])
  const [flipped, setFlipped] = useState<boolean[]>([])
  const [target, setTarget] = useState(0)
  const [targetFlip, setTargetFlip] = useState(false)

  useEffect(() => {
    const imgs = getImagesForCategory(modules, category)
    setImages(imgs)
    setFlipped(new Array(imgs.length).fill(false))
  }, [category])

  useEffect(() => {
    if (images.length) {
      setTarget(Math.floor(Math.random() * images.length))
      setTargetFlip(false)
    }
  }, [images, player])

  function toggle(i: number) {
    const copy = [...flipped]
    copy[i] = !copy[i]
    setFlipped(copy)
  }

  function reset() {
    setFlipped(new Array(images.length).fill(false))
    if (images.length) {
      setTarget(Math.floor(Math.random() * images.length))
    }
    setTargetFlip(false)
  }

  const targetImg = images[target]
  const label = targetImg?.split('/').pop()?.split('.')[0] ?? ''

  return (
    <div className="game">
      <PlayerToggle player={player} setPlayer={setPlayer} />

      <Grid images={images} flipped={flipped} onToggle={toggle} />

      <div className="target">
        {targetImg && (
          <div className={`card ${targetFlip ? 'flipped' : ''}`} onClick={() => setTargetFlip(!targetFlip)}>
            <div className="card-inner">
              <div className="card-front">
                <img src={targetImg} />
                <span>{label}</span>
              </div>
              <div className="card-back" />
            </div>
          </div>
        )}
      </div>

      <div className="controls">
        <button onClick={reset}>Reset</button>
        <button onClick={goBack}>Back</button>
      </div>
    </div>
  )
}
