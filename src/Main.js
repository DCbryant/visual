import Left from './Left'
import Right from './Right'
import Center from './Center'

function Main() {
  return (
    <div style={{display: 'flex', flexDirection: 'row', height: 'calc(100vh - 64px)'}}>
      <Left />
      <Center />
      <Right />
    </div>
  );
}

export default Main;