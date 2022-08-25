import { useEffect, useRef, useState } from 'react';
import Dropdown from '../Dropdown';
import Form from '../Form';
import IconButton from '../IconButton/IconButton';
import { Nav } from './styled';

export default function Navbar({ dispatch }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const ref = useRef();

  useEffect(() => {
    console.log(ref.current);
    const listener = e => {
      if (ref.current.contains(e.target)) return;
      setShowDropdown(false);
    };

    window.addEventListener('click', listener);

    return () => window.removeEventListener('click', listener);
  }, [showDropdown]);

  return (
    <Nav>
      <Form dispatch={dispatch} />
      <div ref={ref}>
        <IconButton onClick={() => setShowDropdown(!showDropdown)}>
          palette
        </IconButton>
        {showDropdown && (
          <Dropdown>
            <IconButton onClick={() => dispatch({ type: 'SET_PRIMARY_THEME' })} bgColor="#845EC2" />
            <IconButton
              onClick={() => dispatch({ type: 'SET_SECONDARY_THEME' })}
              bgColor="#FF8F8F"
            />
            <IconButton
              onClick={() => dispatch({ type: 'SET_TERTIARY_THEME' })}
              bgColor="#FBFF91"
            />
          </Dropdown>
        )}
      </div>
    </Nav>
  );
}
