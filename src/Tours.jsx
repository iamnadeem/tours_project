
const Tours = ({tours}) => {
  return <section>
    <div className="title">

        <h2>Our Tours</h2>
        <div className="title-underline"></div>
    </div>
    <div className="tours">
        {tours.map((tour)=>{
            return <Tour/>

        })}
    </div>

  </section>
    
  
};

export default Tours;