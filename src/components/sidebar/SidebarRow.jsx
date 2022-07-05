import React from 'react';
import './SidebarRow.css'

function SidebarRow({selected, Icon, title}) {
  return (
    <div className={`sidebar-row ${selected && "selected"}`}>
        <Icon className="sidebar-row-icon"/>
        <h1 className="sidebar-row-title">{title}</h1>
    </div>
  )
}

export default SidebarRow