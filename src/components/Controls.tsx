interface Props {
  reset: () => void
  goBack: () => void
}

export default function Controls({ reset, goBack }: Props) {
  return (
    <div className="player-toggle">
      <button onClick={reset}>Reset</button>
      <button onClick={goBack}>Back</button>
    </div>
  )
}
