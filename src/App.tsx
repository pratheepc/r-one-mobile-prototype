import React from 'react'
import iPhoneFrame from './components/iPhoneFrame'

function App() {
  return (
    <iPhoneFrame title="R-One App">
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '20px',
        padding: '20px'
      }}>
        {/* Welcome Section */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '16px',
          padding: '24px',
          color: 'white',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '24px', marginBottom: '8px' }}>
            Welcome to R-One
          </h1>
          <p style={{ fontSize: '16px', opacity: 0.9 }}>
            Your mobile app prototype
          </p>
        </div>

        {/* Feature Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: '#667eea',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '20px'
            }}>
              📱
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '4px' }}>Mobile First</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>
                Designed for mobile devices
              </p>
            </div>
          </div>

          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: '#764ba2',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '20px'
            }}>
              ⚡
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '4px' }}>Fast & Responsive</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>
                Built with React and TypeScript
              </p>
            </div>
          </div>

          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: '#f093fb',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '20px'
            }}>
              🎨
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '4px' }}>Beautiful UI</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>
                Modern and intuitive design
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          padding: '16px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          marginTop: '20px'
        }}>
          Get Started
        </button>
      </div>
    </iPhoneFrame>
  )
}

export default App
