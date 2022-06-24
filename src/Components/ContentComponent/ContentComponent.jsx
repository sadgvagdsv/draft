import HeaderComponent from "../HeaderComponent/HeaderComponent"
import BookingComponent from "../BookingComponent/BookingComponent"
import MapComponent from "../MapComponent/MapComponent"
import DistinationComponent from "../DistinationComponent/DistinationComponent"
import PackageComponent from "../PackageComponent/PackageComponent"
import TripComponent from "../TripComponent/TripComponent"

const ContentComponent = () => {

    return(
        <div>
            <HeaderComponent />
            <BookingComponent />
            <MapComponent />
            <DistinationComponent />
            <PackageComponent />
            <TripComponent />
        </div>
    )
}

export default ContentComponent