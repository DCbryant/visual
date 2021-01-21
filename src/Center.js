import {useState} from 'react';
import Editor from './Editor';
import {componentList} from './constance';
import { v4 as uuidv4 } from 'uuid';
import {cloneDeep} from 'lodash';


function Center() {
  const [dragData, setData] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const index = e.dataTransfer.getData('index')
    const component = cloneDeep(componentList[index])
    component.style = {
      ...component.style,
      top: e.nativeEvent.offsetY,
      left: e.nativeEvent.offsetX,
    }
    component.id = uuidv4()
    setData(data => {
      console.log(data, component, 'xxx')
      return [...data, component]
    })
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'copy'
  }

  console.log(dragData, 'dragData')

  return (
    <div 
      style={{flex: 1, padding: 20, backgroundColor: '#f5f5f5'}}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <Editor data={dragData} />
    </div>
  );
}

export default Center;
