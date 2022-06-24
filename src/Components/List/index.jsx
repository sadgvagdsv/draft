function List(props){
    let user = props.user
    return(
     
        <div className={props.className}>
            <div className={props.company}>
                <p className={props.companIinfo}>{user.company}</p>
            </div>
            <div className={props.report}>
                <p className={props.about}>{user.info}</p>
                <p className={props.careers}>{user.careers}</p>
                <p className={props.mobile}>{user.affilates}</p>
            </div>
        </div>
        
    )
}

export default List