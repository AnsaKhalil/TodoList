import {Link} from 'react-router-dom';
import '../App.css';

export const Navbar = () => {
    return <div className='nav'>
        <Link to='/cats' className='App-link'>Cute Cats</Link>
        <Link to='/todolist' className='App-link'>To Do List</Link>
        <Link to='/' className='App-link'>Home</Link>
        </div>
}