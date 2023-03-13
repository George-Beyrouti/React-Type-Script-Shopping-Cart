import { Row, Col, Container  } from 'react-bootstrap';

export function Home() {
  return (
    <div>
      <Container >
        <Row className="align-items-center justify-center s-auto fw-bold fs-5 my-5 text-center">
          hello, this is a placeholder Home/landing which will be Replaced on a later date.
          <br />
          the purpose of this Project / Site is to showcase a generic Shopping card structure build in React and TypeScript using React-BootStrap for styling.
          <br/><br/>
          this Project is built in order to:
          1-achieve better understanding of how TypeScript works with React.
          (it's a work in Progress, and for learning / Practicing purposes.)
          <br/>
          2-to be implemented later within a E-Commerce site as a future Project. 
          <br/>
          3-this project is built based on a tutorial.

        </Row>
        <Row className="align-items-center justify-center s-auto fw-bold fs-1 my-5 text-center">
          Please go to the Store Page to See the Shopping Cart.
          the shopping cart includes the following features: 
        </Row>
        <Row>1- the ability to add and delete from Cart</Row>
        <Row>2- the ability to increase decrease the quantity of each product in the Cart </Row>
        <Row>3- the Price and the total price of each product multiplied by the quantity</Row>
        <Row>4- the total Price of all the different products in the cart multiplied by their respective quantities</Row>
        <Row></Row>

        <Row className="align-items-center justify-center s-auto fw-bold fs-5 my-5 text-center">
          this is a placeholder Home/landing page,
          this section will serves as a product featuring a carousel or cards. 
        </Row>
      </Container>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">

            <h3>Product 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi hic voluptas harum ullam eveniet sapiente dolorum, numquam sed esse in iure totam dolores deleniti voluptatem ab facilis laudantium saepe tempore.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
          
            <h3>Product 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi hic voluptas harum ullam eveniet sapiente dolorum, numquam sed esse in iure totam dolores deleniti voluptatem ab facilis laudantium saepe tempore.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            
            <h3>Product 3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi hic voluptas harum ullam eveniet sapiente dolorum, numquam sed esse in iure totam dolores deleniti voluptatem ab facilis laudantium saepe tempore.</p>
          </Col>
        </Row>
    </div>
  
  )
}
