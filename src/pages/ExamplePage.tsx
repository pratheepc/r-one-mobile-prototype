
function ExamplePage() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '16px',
      padding: '20px'
    }}>
      <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>
        Example Content
      </h2>
      
      <p style={{ fontSize: '16px', lineHeight: '1.5', color: '#333' }}>
        This is an example page showing how to use the iPhone frame component. 
        You can customize the title, navigation buttons, and content area.
      </p>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '16px',
        border: '1px solid #e1e5e9'
      }}>
        <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Features</h3>
        <ul style={{ 
          listStyle: 'none', 
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#34C759' }}>✓</span>
            Realistic iPhone frame design
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#34C759' }}>✓</span>
            Status bar with time and icons
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#34C759' }}>✓</span>
            Customizable navigation bar
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#34C759' }}>✓</span>
            Home indicator at bottom
          </li>
        </ul>
      </div>

      <button style={{
        background: '#007AFF',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        padding: '12px 16px',
        fontSize: '16px',
        fontWeight: '500',
        cursor: 'pointer'
      }}>
        Continue
      </button>
    </div>
  )
}

export default ExamplePage
