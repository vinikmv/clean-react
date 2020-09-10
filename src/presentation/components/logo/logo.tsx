import React from 'react'

const Logo: React.FC = () => {
  return (
    <img src="data:image/png;base64,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" alt="Logo"/>
  )
}

export default Logo