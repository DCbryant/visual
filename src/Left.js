import DragComponent from './DragComponent'
import {componentList} from './constance'

function Left() {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('index', e.target.dataset.index)
  }
  return (
    <div style={{ width: 200, border: '1px solid #ccc' }} onDragStart={handleDragStart} >
      {componentList.map((type, index) => (
        <DragComponent key={type} type={type} index={index} />
      ))}
    </div>
  );
}

export default Left;
