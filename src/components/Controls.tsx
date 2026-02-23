interface Props {
  reset: () => void
  goBack: () => void
}

export default function Controls({ reset, goBack }: Props) {
  return (
    <div className="controls">
      <button onClick={reset}>Reset</button>
      <button onClick={goBack}>Back</button>
    </div>
  )
}
