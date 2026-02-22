interface Props {
  image: string
  label: string
  flipped: boolean
  onClick: () => void
}

export default function Card({ image, label, flipped, onClick }: Props) {
  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="card-inner">
        <div className="card-front">
          <img src={image} />
          <span>{label}</span>
        </div>
        <div className="card-back" />
      </div>
    </div>
  )
}
