import { useState } from 'react';
import ListGroup from './components/ListGroup'
import Alert from './components/Alert';
import Button from './components/Button';

const App = () => {
  const items = ["San Francisco", "New York", "Seattle", "Los Angeles", "Chicago"];
  const handleItemSelect = (item: string) => { console.log(item)}
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
      setClicked(true)
  }
  return (
    <div>
      <ListGroup heading="Cities" items={items} onSelectItem={handleItemSelect} />
      {clicked && <Alert onClose={() => setClicked(false)} />}
      <Button onClickbtn={handleClick} color='danger'> Click me!</Button>
    </div>
  )
}

export default App
