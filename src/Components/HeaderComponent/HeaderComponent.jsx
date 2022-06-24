import "./HeaderComponent.css"
import NavComponent from "../NavComponent/NavComponent";
import HeaderTextComponent from "../HeaderTextComponent/HeaderTextComponent";

const HeaderComponent = () => {
    return (
        <header className="header">
            <NavComponent />
            <HeaderTextComponent />
        </header>
    )
}

export default HeaderComponent