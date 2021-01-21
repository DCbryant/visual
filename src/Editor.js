import {useState, useEffect} from 'react';
import {cloneDeep} from 'lodash';
function Editor(props) {
  const {data} = props; 
  const [list, setList] = useState(data)

  useEffect(() => {
    setList(data)
  }, [data])


  const handleMouseDown = (e, index) => {
    console.log(e, index, 'e')
    e.stopPropagation();
    const startX = e.clientX;
    const startY = e.clientY;

    const component = cloneDeep(list[index])
    const startTop = component.style.top
    const startLeft = component.style.left

    const move = (moveEvent) => {
      const currentX = moveEvent.clientX
      const currentY = moveEvent.clientY

      const style = {}
      style.top = currentY - startY + startTop;
      style.left = currentX - startX + startLeft;
      const newList = list.map((l, i) => {
        if (index === i) {
          l.style = {...l.style, ...style}
        }
        return l
      })
      setList(newList);
    }

    const up = () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseup', up)
    }

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', up)
  }

  return (
    <div 
      style={{
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        position: 'relative'
      }}>
      {
        data.map((item, index) => {
          const {style, label, id} = item;
          return (
            <div
              style={style} 
              key={id}
              onMouseDown={(e) => handleMouseDown(e, index)}
            >
              {label}
            </div>
          );
        })
      }
    </div>
  );
}

export default Editor;