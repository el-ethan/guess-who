interface Props {
  image: string
  label: string
  flipped: boolean
  onClick: () => void
}

export default function Card({ image, label, flipped, onClick }: Props) {
  const displayLabel = label.split('-')[0]
  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="card-inner">
        <div className="card-front">
          <img src={image} />
        </div>
        <div className="card-back">
          <span>{displayLabel}</span>
        </div>
      </div>
    </div>
  )
}
