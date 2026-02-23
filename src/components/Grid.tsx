import Card from './Card'

interface Props {
  images: string[]
  flipped: boolean[]
  onToggle: (i: number) => void
}

export default function Grid({ images, flipped, onToggle }: Props) {
  return (
    <div className="grid">
      {images.map((img, i) => {
        const label = decodeURIComponent(img.split('/').pop()?.split('.')[0] ?? '')
        return (
          <Card
            key={i}
            image={img}
            label={label}
            flipped={flipped[i]}
            onClick={() => onToggle(i)}
          />
        )
      })}
    </div>
  )
}
