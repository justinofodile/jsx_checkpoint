import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from 'react-bootstrap/Card';
import { Container, Image } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Name from './components/Name';
import Description from './components/Description';
import Price from './components/Price';
import Images from "./components/Image";

//This is the App.js componenet that serves as the parent or root of everyother components
function App() {
  let firstName = prompt('Enter your first name').trim()
  return (
    //Overall container for the App.js
    <Container className='mt-5 mb-5'>
      <Row>
        <Col lg={{ span: 12, offset: 4 }}>
          <Card style={{ width: '18rem' }} className='justify-content-center'>
            {/* Checks if first name is provided, displays firstname else displays hello there */}
            <Card.Header>{<p> Hello {firstName || "there!"} </p>}</Card.Header>
            <Images />
            <Card.Body>
              <Name />
              <Description />
            </Card.Body>
            <Price />
            {/* Checks if first name is prov, displays firstname with an image else displays hello there at the footer */}
            <Card.Footer className="text-muted text-center">{firstName ? (
              <>
                Hello, {firstName}
                <img width={200} src="https://di-uploads-pod24.dealerinspire.com/iratoyotaofdanvers/uploads/2023/01/381092_MY23_Camry_US_XLE-Hybrid_03U5_001_DS-Front-7-8_2K-767x279.png"
                  alt="picture" />
              </>
            ) : (<div>Hello, there!</div>)}
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;


// const firstName = prompt("type your first name");

// function App() {
//   return (
//     <div>
//       <p> Hello {firstName || "Anonymous"} </p>
//       <p> It looks like you {firstName ? "have" : "don’t have"} a name</p>
//       {!firstName && (
//         <form>
//           <p> Type your name here </p>
//           <input type="text" />
//         </form>
//       )}
//     </div>
//   );
// }