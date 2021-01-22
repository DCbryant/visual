import {useState, useEffect} from 'react';
import {cloneDeep} from 'lodash';
import Shape from './Shape'
import ContextMenu from './ContextMenu'

function Editor(props) {
  const {data} = props; 
  const [list, setList] = useState(data)
  const [curIndex, setIndex] = useState(0)
  const [showMenu, setShowMenu] = useState({style: null})

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

  const handleContextMenu = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setShowMenu({
      style: {
        top: e.nativeEvent.offsetY,
        left: e.nativeEvent.offsetX
      }
    })
  }

  return (
    <div 
      style={{
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        position: 'relative'
      }}
      onContextMenu={handleContextMenu}
    >
      {
        data.map((item, index) => {
          const {style, label, id} = item;
          return (
            <Shape 
              key={id}
              customStyle={style}
              onClick={() => setIndex(index)}
            >
              <div
                style={style} 
                onMouseDown={(e) => handleMouseDown(e, index)}
              >
                {label}
              </div>
            </Shape>
          );
        })
      }
      <ContextMenu show={showMenu} hideMenu={() => setShowMenu({style: null})} />
    </div>
  );
}

export default Editor;