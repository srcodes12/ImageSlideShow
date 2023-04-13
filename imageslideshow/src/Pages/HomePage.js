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
        <CardTitle tag='h2'>
          Image 1
        </CardTitle>
        <hr></hr>
        <CardImg top src="https://placeimg.com/640/480/tech" alt="Card image cap" />
        <CardText>
        Some quick example text to build on the card title and make up image 1
        </CardText>
      </Card>
    </Container>
    </>
  )

}

export default HomePage;