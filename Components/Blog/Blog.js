const UserContext = React.createContext();
function Blog(){
    let urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id');

    return(
        <>
        <UserContext.Provider value={id}>
            <div className="d-flex flex-column min-vh-100">
                <Header></Header>
                <div className="mx-5">
                    <BlogDetails></BlogDetails>
                    <div className="d-flex flex-column">
                        <AddComment></AddComment>
                        <CommentList></CommentList>  
                    </div>
                </div>  
                <Footer></Footer>
            </div>
        </UserContext.Provider>
        </>
    )
}


const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Blog />)