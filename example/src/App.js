import React from 'react'

import { useMyHook } from 'roszti-client'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
