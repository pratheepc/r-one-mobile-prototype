import { ReactNode } from 'react'

interface NavigationBarProps {
  title: string
  leftButton?: ReactNode
  rightButton?: ReactNode
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
