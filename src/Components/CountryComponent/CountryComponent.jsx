

const CountryComponent = (props) => {
const list = props.list

   
 
    return(
        <section className={props.className}>

                <div className={props.pictures} 
                style={{
                         backgroundImage: `url(${list.logo})`,
                         backgroundRepeat: 'no-repeat',
                         backgroundPosition: 'center',
                         backgroundSize: 'cover',
                         width: '135px',
                         height: '22vh',
                         }}></div>

               <div className={props.column}>
                    <p > {list.country} </p>
                    <p className={props.spotPostion}> {list.spot} </p>
                </div> 

                <div style={{
                         backgroundImage: `url(${list.icon})`,
                         backgroundRepeat: 'no-repeat',
                         backgroundPosition: 'center',
                         backgroundSize: 'cover',
                         width: '6px',
                         height: '12px',
                         marginRight: '10px'
                         }}> </div>
                
        </section>
    );
}

export default CountryComponent