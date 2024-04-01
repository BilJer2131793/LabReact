function AddComment(){
    let articleId = React.useContext(UserContext)
    async function CreateNewComment(){ 
        let d = new Date()
        let date = `${d.getFullYear()}-${d.getMonth()}-${d.getDay()}`
    
        let contenu = $("#txtCommentaire").val()
        if(contenu != ""){
            let data = JSON.stringify({
                Article: articleId,
                Date: date,
                Contenu: contenu
            })
        
            $.post(`http://localhost:3000/Commentaires`,data, function(){
                console.log("Commentaire ajouter")
            })
        }
    }


    return(
        <>
            <textarea name="txtCommentaire" id="txtCommentaire" cols="30" rows="5"></textarea>
            <input id="btnAjouter" className=" btn btn-primary w-30 align-self-end mt-3" style={{backgroundColor: "#00ADB5"}} type="button" value="Ajouter" onClick={CreateNewComment}></input> 
        </>
    )
}