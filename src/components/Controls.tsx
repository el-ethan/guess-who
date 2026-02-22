interface Props {
  player: number
  setPlayer: (p: number) => void
  reset: () => void
  goBack: () => void
}

export default function Controls({ player, setPlayer, reset, goBack }: Props) {
  return (
    <div className="player-toggle">
      <button className={player === 1 ? 'active' : ''} onClick={() => setPlayer(1)}>P1</button>
      <button className={player === 2 ? 'active' : ''} onClick={() => setPlayer(2)}>P2</button>
      <button onClick={reset}>Reset</button>
      <button onClick={goBack}>Back</button>
    </div>
  )
}
