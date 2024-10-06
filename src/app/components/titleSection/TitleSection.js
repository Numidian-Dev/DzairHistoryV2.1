const TitleSection = ({title, backgroundColor}) =>{
    return(
        <div className="title-i">
            <h1>{title}</h1>
            <div style={{backgroundColor: backgroundColor}} className="hr"/>
        </div>
    )
}
export default TitleSection
