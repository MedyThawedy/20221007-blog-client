import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <header>
    <nav> <Link to="/"><p >Home </p></Link>
    <Link to="/add"><p >Publish new article </p></Link>
    </nav>
    </header>
  )
}
