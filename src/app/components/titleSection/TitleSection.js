"use client"
const TitleSection = ({title, backgroundColor, wrap}) =>{
    return(
        <div className="title-i">
        
            <h1 style={{whiteSpace:wrap?wrap:"nowrap"}}>{title}</h1>
            <div style={{backgroundColor: backgroundColor}} className="hr"/>

        {/*      <style jsx>{`
        .title-i {
         
        
        h1 {
          white-space: {${wrap ? wrap :"nowrap"} } ;
          
        }
        
        
        }
      `}</style> */}
        </div>
    )
}
export default TitleSection
