import BlockComponent from "../BlockComponent/BlockComponent";
import "./MapComponent.css"
import calendar from '../../Pictures/calendar.svg'
import chart from '../../Pictures/chart.svg'
import carbon from '../../Pictures/carbon.svg'
import gridicon from '../../Pictures/gridicon.svg'

const MapComponent = () => {

    const items = [
        {
            id: 1,
            icon: calendar,
            title: "15+",
            content: "Years of Experience"
        },

        {
            id: 2,
            icon: chart,
            title: "15K+",
            content: "Happy Travellers"
        },

        {
            id: 3,
            icon: carbon,
            title: "650+",
            content: "Places Visited"
        },

        {
            id: 3,
            icon:  gridicon,
            title: "2K+",
            content: "Travel History"
        }
    
    ];


    return(
        <section className="bg-color">
            <div className="bg-image">

            <section>
                <p className="title">
                    We always try to give you <br /> the best service
                </p>

                <p className="text">
                    We always try to make our customer Happy. We provide all kind of <br/>
                    facilities. Your Satisfaction is our main priority.
                </p>
            </section> 


                <div className="item-position">
                        {
                        items.map(el => <BlockComponent item={el}
                         key={el.id}
                         className="map-block-size" 
                         logo="map-icon " 
                         title="map-title-style"
                         text="block-text"
                         />) 
                         }
                </div>

            </div>
        </section>
    );
}

export default MapComponent;