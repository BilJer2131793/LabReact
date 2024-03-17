function Acceuil(){
    return(
        <>
            <Header></Header>
            <div className="d-flex container justify-items-center align--end">
                <form className="col-8 " action="/search">
                    <input className="col-10" type="text" name="search" placeholder="Search..."/>
                </form>
                <p className="col-1">Trier par : </p>
                <form className="col-3">
                    <select id="first-select">
                        <option value="">Select</option>
                        <option value="fruits">Fruits</option>
                        <option value="vegetables">Vegetables</option>
                    </select>
                </form>
            </div>  
            <BlogList></BlogList>
            <Footer></Footer>
        </>
    )
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Acceuil />)