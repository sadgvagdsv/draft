import userEvent from "@testing-library/user-event";
import LogoPicture from "../LogoPicture/LogoPicture";
 

const BooComponent = (props) => {

 
    const item = props.item;
    const user = props.user
    
  
    return( 
        
        <section className={props.className}>
       
            <div className={props.logo} style={{ backgroundImage: `url(${item.icon})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                            width: '40px',
                                            height: '40px' }}>

            </div>     
                    
         
        <div className={props.positions}>
            <div className={item.check}>
            <p className={props.title}> {item.title} </p>


            <p className={props.text}> {item.content} </p> 
            </div>
        </div>

    
        </section>
        
    );
}

export default BookComponent;