import {Card , Button} from "react-bootstrap"
function Cardd({el}) {
    function alertMyInput(name) {
        alert(`${name}`)
        
    }
    return(
        <>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.posterUrl} />
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>
    <Card.Text>
      {el.description}
    </Card.Text>
    <Button variant="primary" onClick={() => alertMyInput(el.title)}>
        ClickMe 
    </Button>
  </Card.Body>
</Card>
</>
    )
}
export default Cardd ; 