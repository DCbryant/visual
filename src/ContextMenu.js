
function ContextMenu(props) {
  const {show, hideMenu} = props;
  const btnStyle = {cursor: 'pointer', padding: 10}

  const handleMenu = (type) => {
    hideMenu()
  }
  return (
    show.style ? (
      <div 
        style={{
          position: 'absolute',
          border: '1px solid #f0f0f0', 
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 2px 12px 0 rgba(0,0,0,.1)',
          ...show.style
        }}>
        <span style={btnStyle} onClick={() => handleMenu('copy')}>复制</span>
        <span style={btnStyle} onClick={() => handleMenu('paste')}>粘贴</span>
        <span style={btnStyle} onClick={() => handleMenu('cut')}>剪切</span>
        <span style={btnStyle} onClick={() => handleMenu('delete')}>删除</span>
        <span style={btnStyle} onClick={() => handleMenu('top')}>置顶</span>
        <span style={btnStyle} onClick={() => handleMenu('bottom')}>置底</span>
        <span style={btnStyle} onClick={() => handleMenu('up')}>上移</span>
        <span style={btnStyle} onClick={() => handleMenu('down')}>下移</span>
      </div>
    ) : null
  )
}

export default ContextMenu