import React from 'react';
import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/footer';


export default function Layout() {

  return (<>
    <Navbar />
    <Outlet></Outlet>
  </>
  )
}

