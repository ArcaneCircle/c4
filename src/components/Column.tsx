import Ball from './Ball'

interface ColumnProps {
  onClick: () => number
}

const Column = (props: ColumnProps) => {
  const rows = [0, 1, 2, 3, 4, 5]
  return (
    <div className="column">
      {rows.map(row => (
        <Ball key={row} onClick={props.onClick} />
      ))}
    </div>
  )
}

export default Column
