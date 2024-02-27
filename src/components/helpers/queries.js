const URI_Receta = import.meta.env.VITE_API_RECETA;

export const nuevoRecetaAPI = async (receta)=>{
    try{
        const respuesta= await fetch(URI_Receta, {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(receta)
        });
        return respuesta;
    }catch(error){
        console.log(error);
    }
}

export const leerProductosAPI = async () => {
    try {
      const respuesta = await fetch(URI_Receta);
      console.log(respuesta);
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };

  