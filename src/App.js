import './App.css';

function App() {
  return (
    <div className="App">
     <section className='screen'>
        <input type='checkbox' className='check' id='magicButton' value='None'>
          <label for='magicButton' className='main'></label>
        </input>

        <div className='coverImage'></div>
        <div className='search'></div>
        <div className='bodyPLayer'></div>
        <div className='coverImage'></div>

        <table className='list'>
          <tr className='song'>
            <td className='nr'><h5>1</h5></td>
            <td className='title'><h6>Demons</h6></td>
            <td className='length'><h5>3:12</h5></td>
            <td><input type='checkbox' id='heart'>
            <label for='heart' className='heart'/></input></td>
          </tr>

          <tr className='song'>
            <td className='nr'><h5>1</h5></td>
            <td className='title'><h6>Demons</h6></td>
            <td className='length'><h5>3:12</h5></td>
            <td><input type='checkbox' id='heart1' checked>
            <label for='heart1' className='heart1'/></input></td>
          </tr>

          <tr className='song'>
            <td className='nr'><h5>1</h5></td>
            <td className='title'><h6>Demons</h6></td>
            <td className='length'><h5>3:12</h5></td>
            <td><input type='checkbox' id='heart2'>
            <label for='heart2' className='heart2'/></input></td>
          </tr>

          <tr className='song'>
            <td className='nr'><h5>1</h5></td>
            <td className='title'><h6>Demons</h6></td>
            <td className='length'><h5>3:12</h5></td>
            <td><input type='checkbox' id='heart3' checked>
            <label for='heart3' className='heart3'/></input></td>
          </tr>
        </table>
     </section>
    </div>
  );
}

export default App;
