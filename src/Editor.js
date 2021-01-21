function Editor(props) {
  const {data} = props; 

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
            <div style={style} key={id}>
              {label}
            </div>
          );
        })
      }
    </div>
  );
}

export default Editor;