import { useState } from 'react'

import { OButton } from '@ocloud/ui'

const SampleProgramme = () => {
  const [quantity, setQuantity] = useState<number>(0)

  const handleClick = () => {
    setQuantity(quantity + 1)
  }

  return (
    <div>
      <p>{quantity}</p>
      <OButton onClick={handleClick}>Increase</OButton>
    </div>
  )
}

export default SampleProgramme
