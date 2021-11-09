import React from 'react';
import Drawer from './app-drawer';

export default function Header(props) {
  return (
    <div className="header row justify-between align-center header-padding">
      <Drawer />
      <div className="injustice">InjusticeDB</div>
    </div>
  );
}
