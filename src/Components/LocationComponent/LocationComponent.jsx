


const LocationComponent = (props) => {

    const list = props.list;
    const background = list.pic;
    const icon = list.logo;

    return(
            <section className={props.className}>

                <section className={props.content_position}>    
                    <div style={{ backgroundImage: `url(${background})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover' }} className={props.picture}></div>


                    <div className={props.price_position}>
                        <p> {list.timing} </p>
                        <p> {list.price} </p>
                    </div>    
                    <p className={props.describtion}> {list.describtion} </p>
                        

                    <section className={props.more_info}>
                        <div className={props.location}>
                            <div  style={{ backgroundImage: `url(${icon})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                            width: '7px',
                                            height: '9px' }} ></div>
                            <p className={props.bold}> {list.country} </p>
                        </div>
                            <p className={props.bold}> {list.more} </p>
                    </section>
                </section>    

            </section>
    );
}

export default LocationComponent;