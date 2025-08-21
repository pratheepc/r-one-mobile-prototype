import { useState, useEffect } from 'react'

interface PWAInstallPromptProps {
  onInstall?: () => void
  onDismiss?: () => void
}

function PWAInstallPrompt({ onInstall, onDismiss }: PWAInstallPromptProps) {
  const [showPrompt, setShowPrompt] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)

  useEffect(() => {
    // Check if running on iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent)

    // Check if running on Android
    const android = /Android/.test(navigator.userAgent)

    // Check if app is already installed (running in standalone mode)
    const standalone = window.matchMedia('(display-mode: standalone)').matches

    console.log('PWA Debug Info:', {
      userAgent: navigator.userAgent,
      isIOS: iOS,
      isAndroid: android,
      isStandalone: standalone,
      hasServiceWorker: 'serviceWorker' in navigator
    })

    // Listen for beforeinstallprompt event (Android)
    const handleBeforeInstallPrompt = (e: any) => {
      console.log('beforeinstallprompt event fired')
      e.preventDefault()
      setDeferredPrompt(e)
      setShowPrompt(true)
    }

    // Listen for appinstalled event
    const handleAppInstalled = () => {
      console.log('appinstalled event fired')
      setShowPrompt(false)
      setDeferredPrompt(null)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)

    // For Android, show prompt if not in standalone mode
    if (android && !standalone) {
      // Check if PWA is installable by looking for manifest
      const manifestLink = document.querySelector('link[rel="manifest"]')
      if (manifestLink) {
        console.log('Manifest found, PWA should be installable')
        // Show prompt after a short delay to allow beforeinstallprompt event
        setTimeout(() => {
          if (!deferredPrompt) {
            console.log('No beforeinstallprompt event, showing manual install option')
            setShowPrompt(true)
          }
        }, 2000)
      } else {
        console.log('No manifest found')
      }
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])

  const handleInstall = async () => {
    console.log('Install button clicked')
    console.log('deferredPrompt exists:', !!deferredPrompt)
    
    if (deferredPrompt) {
      try {
        // Show the install prompt for Android
        console.log('Showing native install prompt...')
        deferredPrompt.prompt()
        const { outcome } = await deferredPrompt.userChoice
        console.log('Install outcome:', outcome)
        
        if (outcome === 'accepted') {
          console.log('User accepted the install prompt - app will be installed')
        } else {
          console.log('User dismissed the install prompt')
        }
        setDeferredPrompt(null)
      } catch (error) {
        console.error('Error during install:', error)
      }
    } else {
      console.log('No deferredPrompt available - showing manual install instructions')
      // Show manual install instructions for Android
      alert('To install this app:\n\n1. Tap the menu button (⋮) in your browser\n2. Tap "Add to Home screen" or "Install app"\n3. Tap "Add" to confirm')
    }
    setShowPrompt(false)
    onInstall?.()
  }

  const handleDismiss = () => {
    setShowPrompt(false)
    onDismiss?.()
  }

  if (!showPrompt) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        maxWidth: '320px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          background: '#E23151',
          borderRadius: '12px',
          margin: '0 auto 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px'
        }}>
          📱
        </div>
        
        <h3 style={{
          fontSize: '18px',
          fontWeight: '600',
          marginBottom: '8px',
          color: '#000'
        }}>
          Install R-One App
        </h3>
        
        <p style={{
          fontSize: '14px',
          color: '#666',
          marginBottom: '20px',
          lineHeight: '1.4'
        }}>
          Add this app to your home screen for a better experience
        </p>

        <div style={{
          background: '#f8f9fa',
          borderRadius: '8px',
          padding: '12px',
          marginBottom: '20px',
          fontSize: '12px',
          color: '#666',
          textAlign: 'left'
        }}>
          <strong>How to install:</strong>
          <p style={{ margin: '8px 0 0 0', padding: 0 }}>
            Tap "Install" below to add this app to your home screen
          </p>
        </div>

        <div style={{
          display: 'flex',
          gap: '12px'
        }}>
          <button
            onClick={handleDismiss}
            style={{
              flex: 1,
              padding: '12px',
              border: '1px solid #E23151',
              borderRadius: '8px',
              background: 'white',
              color: '#E23151',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#FFF5F5'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'white'
            }}
          >
            Maybe Later
          </button>
          
          <button
            onClick={handleInstall}
            style={{
              flex: 1,
              padding: '12px',
              border: 'none',
              borderRadius: '8px',
              background: '#E23151',
              color: 'white',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#d32f2f'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#E23151'
            }}
          >
            Install
          </button>
        </div>
      </div>
    </div>
  )
}

export default PWAInstallPrompt
