import {useState} from 'react'
function Shape(props) {
  const {children, customStyle} = props
  const pointList = ['lt', 't', 'rt', 'r', 'rb', 'b', 'lb', 'l']
  const angles = {
    lt: 0,
    t: 45,
    rt: 90,
    r: 135,
    rb: 180,
    b: 225,
    lb: 270,
    l: 315
  }

  const {width, height, top, left} = customStyle;

  function getPointStyle(point) {
    const hasT = /t/.test(point)
    const hasB = /b/.test(point)
    const hasL = /l/.test(point)
    const hasR = /r/.test(point)

    let newLeft = 0
    let newTop = 0

    if (point.length === 2) {
      newLeft = hasL ? 0 : width
      newTop = hasT ? 0 : height
    } else {
      if (hasT || hasB) {
        newLeft = width / 2
        newTop = hasT ? 0 : height
      }

      if (hasL && hasR) {
        newLeft = hasL ? 0 : width
        newTop = height / 2
      }
    }

    const style = {
      marignLeft: '-4',
      marginTop: '-4',
      left: newLeft,
      top: newTop
    }

    const defaultStyle = {
      position: "absolute",
      background: "#fff",
      border: "1px solid #59c7f9",
      width: '8px',
      height: '8px',
      borderRadius: '50%',
    }

    const mergedStyle = {...defaultStyle, ...style}
    console.log(mergedStyle, 'mergedStyle');
    return mergedStyle;

  }

  return (
    <div style={{position: 'absolute', width: width, height: height}}>
      {pointList.map(point => {
        return (
          <div style={getPointStyle(point)}></div>
        )
      })}
      {children}
    </div>
  )
}


export default Shape