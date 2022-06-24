import CountryComponent from "../CountryComponent/CountryComponent"
import "./DistinationComponent.css"
import thailand from '../../Pictures/thailand.svg'
import newzeland from '../../Pictures/newzeland.svg'
import indonesiaa from '../../Pictures/indonesiaa.svg'
import arrow from '../../Pictures/arrow.svg'




const DistinationComponent = () => {

    const list = [
        {
            id: 1,
            img: '../../../public/Images/first.jpg',
            country: 'Thailand',
            spot: '20+ Spots 2D & 3N',
            logo: thailand,
            icon: arrow
        },
        {
            id: 2,
            img: '',
            country: 'Indonesia',
            spot: '25+ Spots 3D & 3N',
            logo: newzeland,
            icon: arrow
        },
        {
            id: 3,
            img: '',
            country: 'New Zeland',
            spot: '20+ Spots 3D & 2N',
            logo: indonesiaa,
            icon: arrow
        }
    ]

    return(
        <section className="bg-distination">

            <p className="descrition-text">
                Our Popular Distinations
            </p>
            <section className="descrition-block">
                     <div className="bg-img"></div>
                    <div>
                        {
                            list.map(el => <CountryComponent list={el}
                                key={el.id}
                                className="list"
                                column="column"
                                spotPostion="spotPostion"
                                pictures="pictures"
                            />)
                          
                        }
                    </div>
            </section>

        </section>
    )
}

export default DistinationComponent