function BlogList(){

    let [publications, setPublications] = React.useState('')

    React.useEffect(() => {
        async function GetBlogs(){
            await fetch("http://localhost:3000/Publications")
            .then(response => response.json())
            .then(json => json.reverse())
            .then(json => setPublications(json))
        }
        GetBlogs()
    }, [])

    return (
    <>
        <div className="blog d-flex flex-wrap" style={{backgroundColor: "222831"}}>
            {Array.from(publications).map(publication=><BlogCard key = {publication.id} publication = {publication}></BlogCard>)}
        </div>
    </>
    )
}

