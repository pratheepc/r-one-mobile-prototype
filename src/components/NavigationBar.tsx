import React from 'react'

interface NavigationBarProps {
  title: string
  leftButton?: React.ReactNode
  rightButton?: React.ReactNode
}

function NavigationBar({ title, leftButton, rightButton }: NavigationBarProps) {
  return (
    <div className="nav-bar">
      {leftButton && <div className="nav-left">{leftButton}</div>}
      <div className="nav-title">{title}</div>
      {rightButton && <div className="nav-right">{rightButton}</div>}
    </div>
  )
}

export default NavigationBar
