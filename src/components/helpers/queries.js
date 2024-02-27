const URI_Receta = import.meta.env.VITE_API_RECETA;

export const nuevoRecetaAPI = async (producto)=>{
    try{
        const respuesta= await fetch(URI_Receta, {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(producto)
        });
        return respuesta;
    }catch(error){
        console.log(error);
    }
}