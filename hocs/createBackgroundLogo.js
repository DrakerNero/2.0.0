export default function BackgroundLogo({ position = 'left', children }) {

  const backgroundSize = (position === 'left') ? '100%' : '0'

  return (
    <div className='bg-logo'>
      <div className='bg-section'
        style={{
          [position]: '0px',
          'background-position-x': backgroundSize
        }}
      />
      {children}
      <style jsx>{`
        .bg-logo {
          position: relative;
        }
        .bg-section {
          opacity: 0.1;
          position: absolute;
          top: 50%;
          margin-top: -500px;
          max-width: 570px;
          width: 100%;
          height: 1000px;
          background: url("static/icon-ios-fullsize-transparent.png") center;
          background-repeat: no-repeat;
          background-size: 175%;
          background-position-x: 0;
        }
      `}</style>
    </div>
  )
}
