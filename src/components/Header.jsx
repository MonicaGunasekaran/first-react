import globa from '../assets/global.png';
export default function Header(){
    return(<>
    <header>
    <img src={globa} alt="globe" height="20px" width="20px" style={{ filter: 'brightness(0) invert(1)' }}  />
    <p>My travel app</p>
    </header>
      
        
        
        </>)
}