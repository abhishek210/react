import Card from "./Component/Card";
import './app.css'
const arr = {
  name: ["#FF6663", "#333333", "#000000", "#38BB14", "#C90B0B", "#FF8000", "#FFF500", "#CCCCCC", "#7E41A2", "#C14911"],
  color: ["PINK", "GRAY", "BLACK", "GREEN", "RED", "ORANNGE", "YELLOW", "LIGHT GRAY", "PURPLE", "BROWN"]
}
function App() {
  const { name, color } = arr;
  return (
    <div className="app">
      {/* {console.log(name)} */}

      <Card  data={name[0]} color={color[0]} backgroundColor="pink" />
      <Card  data={name[1]} color={color[1]} backgroundColor="gray" />
      <Card  data={name[2]} color={color[2]} backgroundColor="black" />
      <Card  data={name[3]} color={color[3]} backgroundColor="green" />
      <Card data={name[4]} color={color[4]} backgroundColor="red" />
      <Card  data={name[5]} color={color[5]} backgroundColor="orange" />
      <Card  data={name[6]} color={color[6]} backgroundColor="yellow" />
      <Card  data={name[7]} color={color[7]} backgroundColor="lightgray" />
      <Card  data={name[8]} color={color[8]} backgroundColor="purple" />
      <Card  data={name[9]} color={color[9]} backgroundColor="brown" />



    </div>
  )


}

export default App;
