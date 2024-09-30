import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import k  from  './images/kochi.jpg'
import alap from './images/alappuzha.jpg';
import  mn from './images/munnar.jpg';
import  knr from './images/kannur.webp';
import  tvm from './images/trivandrum.jpg';
import  cal from './images/kozhikkod.webp';
import  mal from './images/malappuram.webp';

import { useContext} from 'react';
import commentContext from './commentProvider';


// import svp from './images/s_vallay_park.jpg'
import { Container, Row,Col } from 'react-bootstrap';
import '../App.css'
import { useState } from 'react';
function Cardskerala(){
    const [title,setTitle]=useState("")
    const{comment}=useContext(commentContext)
    const record=[
        {idno:1,title:'Kochi',
            description:"Kochi (also known as Cochin) is a city in southwest India's coastal Kerala state. It has been a port since 1341, ",imageUrl:k},
        {idno:2,title:'Alappuzha',
        description:" Alappuzha (or Alleppey) is a city on the Laccadive Sea in the southern Indian state of Kerala. ",imageUrl:alap},
        {idno:3,title:'Munnar',
         description:"Munnar is a town in the Western Ghats mountain range in India’s Kerala state. ",imageUrl:mn},   
         {
            idno:4 ,title:"Kannur" , description:"Kannur (Malayalam: [kɐɳːuːr] ), formerly known in English as Cannanore, is a city and a municipal corporation in the state of Kerala, India." ,imageUrl:knr
         },
         {
            idno:5 ,title:"Trivandrum" , description:"Thiruvananthapuram, formerly known as Trivandrum, is the capital city of the Indian state of Kerala. It is the most populous city in Kerala" ,imageUrl:tvm
         },
         {
            idno:6 ,title:"Kozhikkod" , description:"Kozhikode (pronounced [koːɻikːoːɖɨ̆] ), official name until 1990 was Calicut, is a city along the Malabar Coast in the state of Kerala in India" ,imageUrl:cal
         },
         {
            idno:7 ,title:"Malappuram" , description:"Malappuram (also Malapuram) (Malayalam: [mɐlɐpːurɐm] ) is a town in Kerala and the headquarters of the Malappuram district in Kerala, India. It is the 4th largest urban agglomeration in Kerala" ,imageUrl:mal
         }
        
    ]
    return(
        <>
       <Container className="margint">
        <Row className='mb-3'> 
            <Col>
             <input type="text" name="sch" onChange={(e)=>{
                   setTitle(e.target.value)
             }} className='form-control' placeholder='type  place name here!'/>
             
            </Col>
        </Row>
        <Row className='mb-3'>
            <Col>
            <Button variant='success' onClick={()=>{
                setTitle("")
            }}>
                All
            </Button>
            </Col>
            {
                record.length>0&& 
                record.map((item)=>{
                    return(
                        <Col key={item.idno}>
                        <Button variant='info' onClick={(e)=>{
                            setTitle(item.title)
                        }}>
                            {item.title}
                        </Button> 
                      
                        </Col>
                    )
                })
            }
        </Row>
        <Row>
            {    
                 record.length>0?  
                
                 record.filter((rec)=>{
                    return(rec.title.toLocaleLowerCase().match(title.toLocaleLowerCase()))
                 })

             
                 .map((list)=>{
                   return(
                    <Col lg={3} className='mb-2' key={list.idno}>
                    <Card>
                        <Card.Img variant="top" src={list.imageUrl}  style={{height:'120px'}}/>
                        <Card.Body>
                        <Card.Title>{list.title}</Card.Title>
                                <Card.Text>
                                 {list.description}
                                </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    
                </Col>
                   )
                 })
                 
                 
                 :"No Data Found"

            }
      

       
        </Row>
        <Row>
            <Col>
            {comment}
            </Col>
        </Row>
       </Container>
     
        </>
    )
}

export default Cardskerala;