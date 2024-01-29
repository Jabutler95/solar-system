import Continent from "./Continent"
import Moon from "./Moon"

const Planet = (props) => {
  return ( 
    <div>
      {props.name} contains:
      <Continent />
      and has a moon named
      <Moon />

    </div>
  )
}

export default Planet