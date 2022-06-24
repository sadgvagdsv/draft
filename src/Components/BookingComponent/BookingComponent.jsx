import BookComponent from "../BlockComponent/BlockComponent";
import "./BookingComponent.css"
import vector from '../../Pictures/vector.svg'
import arrrow from '../../Pictures/arrrow.svg'
import home from '../../Pictures/home.svg'
  
 


const BookingComponent = () => {

    const items = [
        {
            id: 1,
            icon: vector,
            title: "Ticket Booking",
            content: "We book all kind of national or international ticket for your destinaion."
        },

        {
            id: 2,
            icon: home,
            title: "Hotel Booking",
            content: "You can easily book your according to your budget hotel by our website."
        },

        {
            id: 3,
            icon: arrrow,
            title: " Tour Plan",
            content: "We provide you the best plan within a short time explore more."
        }

    ];

    return(
        <section className="booking-content">
                <p className="text-style">Our Service</p>

                

            <div className="booing-items">
                {
                    items.map(el => <BookComponent item={el} 
                        key={el.id} 
                        className="booking" 
                        logo="logo" 
                        title="booking"
                        text="bookingtext"
                        booking_title="booking_title"
                        />)
                }
            </div>  
        </section>
    );
}

export default BookingComponent;