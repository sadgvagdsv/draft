import "./PackageComponent.css"
import LocationComponent from "../LocationComponent/LocationComponent"
import japan from '../../Pictures/japan.svg'
import indonesia from '../../Pictures/indonesia.svg'
import sea from '../../Pictures/sea.svg'
import location from '../../Pictures/location.svg'



const PackageComponent = () => {

    const list = [
        {
            id: 1,
            pic: indonesia,
            timing: "3 Days, 2 NIghts",
            price: "$500 / Person",
            describtion: "Explore the Beauty of the island for 3 days and 2 nights with our travel agency",
            logo: location,
            country: 'Indonesia',
            more: "Know More"
        },
        {
            id: 2,
            pic: japan,
            timing: "3 Days, 2 NIghts",
            price: "$800 / Person",
            describtion: "Enjoy the Shrimes and blossoms here in this beautiful country",
            logo: location,
            country: 'Japan',
            more: "Know More"
        },
        {
            id: 3,
            pic: sea,
            timing: "3 Days, 2 NIghts",
            price: "$600 / Person",
            describtion: "Explore the majestic mountains and landscapes day and nights",
            logo: location,
            country: 'Mountains',
            more: "Know More"
        },
    ];

    return(
        <section className="package-block">
            <h1 className="text-style"> Best Packages For You </h1>
            <div className="div">
                <ul className="btn-list">
                    <li className="single-btn first-btn"> Hot Deals </li>
                    <li className="single-btn"> Backpack </li>
                    <li className="single-btn"> South Asia </li>
                    <li className="single-btn"> Honeymoon</li>
                    <li className="single-btn"> Europe </li>
                    <li className="single-btn"> More </li>
                </ul>
            </div>

            <section className="list-position">
                {
                    list.map((el, index) => <LocationComponent list={el} 
                    key={index}
                    className="content"
                    picture="picture"
                    bold="bold"
                    price_position="price_position"
                    describtion="describtion"
                    more_info="more_info"
                    content_position="content_position"
                    location="location"
                    />)
                }
            </section>

            <p className="btn-text"> Discover More </p>

        </section>
    )
}

export default PackageComponent