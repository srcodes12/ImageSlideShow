import { react, useState } from 'react';
import {
  Container,
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
  Button,
  CardTitle,
  CardGroup,
  CardText,
  ListGroupItem,
  ListGroup,
} from 'reactstrap'

const HomePage = () => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <>
    <Container>
      <Card>
        <CardTitle>

        </CardTitle>
        <CardImg>

        </CardImg>
        <CardText>
          
        </CardText>
      </Card>
    </Container>
    </>
  )

}