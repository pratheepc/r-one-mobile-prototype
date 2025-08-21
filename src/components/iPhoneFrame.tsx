
import { ReactNode } from 'react'
import StatusBar from './StatusBar'
import NavigationBar from './NavigationBar'
import HomeIndicator from './HomeIndicator'

interface iPhoneFrameProps {
  children: ReactNode
  title?: string
  leftButton?: ReactNode
  rightButton?: ReactNode
  showStatusBar?: boolean
  showNavBar?: boolean
  showHomeIndicator?: boolean
}

function iPhoneFrame({
  children,
  title = 'App',
  leftButton,
  rightButton,
  showStatusBar = true,
  showNavBar = true,
  showHomeIndicator = true
}: iPhoneFrameProps) {
  return (
    <div className="iphone-frame">
      <div className="iphone-screen">
        <div className="app-content">
          {showStatusBar && <StatusBar />}
          {showNavBar && (
            <NavigationBar
              title={title}
              leftButton={leftButton}
              rightButton={rightButton}
            />
          )}
          <div className="content-area">
            {children}
          </div>
          {showHomeIndicator && <HomeIndicator />}
        </div>
      </div>
    </div>
  )
}

export default iPhoneFrame
