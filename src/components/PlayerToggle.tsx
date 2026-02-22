interface Props {
  player: number
  setPlayer: (p: number) => void
}

export default function PlayerToggle({ player, setPlayer }: Props) {
  return (
    <div className="player-toggle">
      <button className={player === 1 ? 'active' : ''} onClick={() => setPlayer(1)}>P1</button>
      <button className={player === 2 ? 'active' : ''} onClick={() => setPlayer(2)}>P2</button>
    </div>
  )
}
