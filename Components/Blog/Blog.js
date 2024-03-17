function Blog(){
    let urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id');
    return(
        <>
            <div className="d-flex flex-column min-vh-100">
                <Header></Header>
                <div className="mx-5">
                    <BlogDetails id={id}></BlogDetails>
                    <div className="d-flex flex-column">
                        <AddComment id={id}></AddComment>
                        <CommentList id={id}></CommentList>  
                    </div>
                </div>  
                <Footer></Footer>
            </div>
        </>
    )
}


const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Blog />)