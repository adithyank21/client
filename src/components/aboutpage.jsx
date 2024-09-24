import { Button } from "react-bootstrap"
import {useNavigate} from 'react-router-dom'


function Aboutpage()
{
    const nav=useNavigate()
    return(
        <>
        <h1>About page</h1>
        <p>About psgr is working
        <Button variant="danger" onclick={() =>nav("/")}> Back</Button>
        </p>
        </>
    )
}
export default Aboutpage