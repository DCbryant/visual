
import { Button } from 'antd'

function DragComponent(props) {
  const {type, index} = props;
  const textMap = {
    'text': '文字',
    'button': '按钮', 
    'image': '图片'
  };
  if (!type) return null;
  
  return (
    <Button draggable data-index={index} >
      {textMap[type]}
    </Button>
  );
}

export default DragComponent;
