
module.exports = {
    purge: ['./components/**/*.js', './pages/**/*.js'],
    theme: {
      top: {
        'auto': 'auto',
        '0': 0,
        '1/2': '50%'
      },
      left: {
        'auto': 'auto',
        '0': 0,
        '1/2': '50%'
      },

      screens: {
        'xs': '354px',
        
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        'm-xs-h': {'raw': '(max-height: 376px)'},
      },
      extend: {

        
        colors: {
          'accent-1': '#FAFAFA',
          'accent-2': '#EAEAEA',
          'accent-7': '#333',
          success: '#0070f3',
          cyan: '#79FFE1',
        },
        spacing: {
          28: '7rem',
        },
        letterSpacing: {
          tighter: '-.04em',
        },
        lineHeight: {
          tight: 1.2,
        },
        fontSize: {
          '5xl': '2.5rem',
          '6xl': '2.75rem',
          '7xl': '4.5rem',
          '8xl': '6.25rem',
        },
        boxShadow: {
          small: '0 5px 10px rgba(0, 0, 0, 0.12)',
          medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
        },
      },
    },
  }