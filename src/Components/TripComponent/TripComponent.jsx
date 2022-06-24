import  "./TripComponent.css"
import BlockComponent from "../BlockComponent/BlockComponent"
import List from "../List";

const TripComponent = () => {

    const items = [
        {
            id: 1,
            icon: '',
            title: 'Choose Destination',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ',
            color: '#F0BB1F',
            icon:'../../../public/Images/pic/a1.svg'
           
        },
        {
            id: 2,
            icon: '',
            title: 'Make Payment',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ',
            color: '#F15A2B',
            icon:'../../../public/Images/pic/a2.svg'
            
        },
        {
            id: 3,
            icon: '',
            title: 'Reach Airport on Selected Date',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ',
            color: '#006380',
            icon:'../../../public/Images/pic/a1.svg'
           
        },


      
    ];
    let user = [
        {
            id:1,
            company:'Company',
            info:'About',
            careers:'Careers',
            affilates:'Affilates'

        },
        {   
            id:2,
            company:'Contact',
            info:'Help/FAQ',
            careers:'Airline',
            affilates:'Press'

        },{ 
            id:3,
            company:'More',
            info:'About',
            careers:'Airline',
            affilates:'Low fare tips'

        },

    ]  

    return(
      <section>  
        <section className="block-style">

            <section className="text-position">
                <h1 className="title-style"> Book Your Next Trip in 3 Easy Steps </h1>
                <p className="string-style"> Easy and Fast </p>
            </section>

            <section className="trip-section">

              <div className="trip-second">
                {
                    items.map(el => <BlockComponent item={el}
                                                    key={el.id}
                                                    className="trip-block"
                                                    logo="trip-logo"
                                                    pic='trip-png'
                                                    title="trip-title"
                                                    text="trip-text "
                                                    content="trip-content "
                                                    position="trip-position"
                    />)
                }
              </div>
     <section className="blok-contenier">         
        <section className="trip-contenier">
              <div className="trip-content">
                
                <div className="trip-pic"></div>
                <p className="blok-text">Trip To Greece</p>
                <p className="blok-name"> 14-29 June by Robbin joseph</p>
                <div className="blok-icon">
                    <div className="blok-logo"><div className="icon-in"></div></div>
                    <div className="blok-logo"><div className="icon-in two"></div></div>
                    <div className="blok-logo"><div className="icon-in three"></div></div>
                </div>
                <p className="blok-foot">24 people going </p>
              </div>
        </section> 
        <div className="blok-secnd">
            <div className="secnd-img"></div>
            <div className="secnd-info">
                <p className="secnd-text">Ongoing</p>
                <h2 className="secnd-title">Trip to rome</h2>
                <div className="line">
                    <div className="line-secnd"></div>
                </div>
                <p className="secnd-name"><span className="secnd-word">40%</span>  completed</p>
                
            </div>
        </div>     
        </section>
            </section>

        </section>
    <div className="people">
        <p className="people-name">What People Say About Us</p>
        <div className="people-img">
            <div className="left-img"></div>
            <div className="img-content">
                <div className="img-foot">
                    <p className="people-text">Lorem ipsum dolor sit amet, consectetur adipiscing<br/>
                     elit ut aliquam, purus sit amet luctus venenatis, lectus <br/>
                     magna fringilla urna, porttitor
                    </p>
                    <p className="people-lastname">-Jeo Stanlee</p>
                </div>
                <div className="people-radiius"></div>
            <div className="people-about"></div>
            </div>
            
            <div className="right-img"></div>
        </div>
    </div>
    
    <div className="footer">
        <div className="footer-logo">
        <div className="lokacia">
            <div className="lok"></div>
        </div>
            <p className="footer-text">Subscribe to get information, latest news and other<br/>
               interesting offers about Cobham
            </p>
            <div className="footer-message">
                <div className="mesagge">
                    <div className="mesagge-logo"></div>
                    <span className="message-text">Your email</span>
                </div>
                <button className="footer-btn">Subscribe</button>
            </div>
            
        </div>
        
    </div>
  
<div className="table">
    <div className="table-left">
             <div className="right-blok">
                <div className="right-compani">
                    <p className="right-name">Travel</p>
                    <p className="right-name">Goo</p>
                </div>
                <div className="right-foot">
                    <p className="right-info">Book your trip in minute, get full<br/>
                            Control for much longer.
                    </p>
                </div>
             </div>
     </div>
    <div className="table-center">
    {user.map(info => <List className='table-blok' key={info.key} user={info}
        company ='company'
        companIinfo = 'companIinfo'
        report ='report-secnd'
        about ='report'
        careers ='report'
        mobile = 'report'


        />)}
    </div>    
    <div className="table-right">
        <div className="centr-blok">
            <div className="cent-logo">
                <div className="logo-fb"></div>
                <div className="logo-insta">
                    <div className="instagram"></div>
                </div>
               
            </div>
            <p className="centr-text">Discover our app</p>
            <div className="centr-logos">
                <div className="android"></div>
                <div className="ios"></div>
            </div>
        </div>
    </div>
</div>

  

 </section>         
    );
}

export default TripComponent;