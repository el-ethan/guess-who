import { useEffect, useState } from 'react'
import Grid from '../components/Grid'
import Controls from '../components/Controls'
import { getAllImages, getImagesForCategory } from '../utils/getImages'

interface Props {
  category: string
  goBack: () => void
}

export default function Game({ category, goBack }: Props) {
  const modules = getAllImages()

  const [images, setImages] = useState<string[]>([])
  const [flipped, setFlipped] = useState<boolean[]>([])
  const [target, setTarget] = useState(0)
  const [targetFlip, setTargetFlip] = useState(false)

  useEffect(() => {
    const imgs = getImagesForCategory(modules, category)
    setImages(imgs)
    setFlipped(new Array(imgs.length).fill(false))
    if (imgs.length) {
      setTarget(Math.floor(Math.random() * imgs.length))
    } else {
      setTarget(0)
    }
    setTargetFlip(false)
  }, [category])

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
  const label = (() => {
    const raw = targetImg?.split('/').pop()?.split('.')[0] ?? ''
    try {
      return decodeURIComponent(raw).split('-')[0]
    } catch (e) {
      return raw.split('-')[0] ?? ''
    }
  })()

  return (
    <div className="game">
      <Controls reset={reset} goBack={goBack} />

      <Grid images={images} flipped={flipped} onToggle={toggle} />

      <div className="target" style={{width: "25%", display: "flex", alignItems: "center", justifyContent: "center"}} >
        {targetImg && (
          <div className={`card ${targetFlip ? 'flipped' : ''}`} onClick={() => setTargetFlip(!targetFlip)}>
            <div className="card-inner">
              <div className="card-front">
                <img src={targetImg} />
              </div>
              <div className="card-back">
                <span>{label}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
