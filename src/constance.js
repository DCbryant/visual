import { v4 as uuidv4 } from 'uuid';

export const componentList =  [
  {
    id: uuidv4(),
    component: 'text',
    label: '文字',
    icon: 'xxx',
    animations: [],
    events: {},
    type: 'text',
    style: {
      width: 200,
      height: 200,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: 'center',
      color: '',
      border: '1px solid red',
      position: 'absolute',
    }
  },
  {
    id: uuidv4(),
    component: 'image',
    label: '图片',
    icon: 'xxx',
    animations: [],
    events: {},
    type: 'image',
    style: {
      width: 200,
      height: 200,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: 'center',
      color: '',
      border: '1px solid red',
      position: 'absolute',
    }
  },
  {
    id: uuidv4(),
    component: 'button',
    label: '按钮',
    icon: 'xxx',
    animations: [],
    events: {},
    type: 'button',
    style: {
      width: 200,
      height: 200,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: 'center',
      color: '',
      border: '1px solid red',
      position: 'absolute',
    },
  }
]