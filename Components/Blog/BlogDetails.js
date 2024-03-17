function BlogDetails({id}){

    let [publication, setPublication] = React.useState('')
    
    React.useEffect(()=>{
        async function GetContent(){
            await fetch(`http://localhost:3000/Publications?id=`+id)
            .then(reponse=>reponse.json())
            .then(json => setPublication(json[0]))       
        }
        GetContent(id)
    },[])


    console.log("a")
    return(
    <>
        <div>
            <img className="mx-auto d-block img-fluid" src="https://picsum.photos/id/237/200" alt="" />
        </div>
        <div>
            <h2 className="text-center titre">{publication.Titre}</h2>
            <div className="contenu"><p>{publication.Contenu}</p></div>
        </div>
    </>
    )

    
}
