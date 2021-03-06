import * as React from 'react'
import { Container } from 'bloomer'

interface LayoutMainProps {
  className?: string
}

const LayoutMain: React.SFC<LayoutMainProps> = ({ children, className }) => (
  <Container isFluid className={className}>
    {children}
  </Container>
)

export default LayoutMain
