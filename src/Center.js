import Editor from './Editor';
import {componentList} from './constance';

function Center() {
  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const index = e.dataTransfer.getData('index');
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const index = e.dataTransfer.getData('index');
    const component = componentList[index];
    console.log(component, 'component')
  }

  return (
    <div 
      style={{flex: 1, padding: 20, backgroundColor: '#f5f5f5'}}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <Editor />
    </div>
  );
}

export default Center;
