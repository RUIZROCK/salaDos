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

export const leerRecetasAPI = async () => {
    try {
      const respuesta = await fetch(URI_Receta);
      console.log(respuesta);
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };

  export const borrarRecetaAPI = async (id) => {
    try {
      const respuesta = await fetch(`${URI_Receta}/${id}`, {
        method: "DELETE",
      });
      console.log(respuesta);
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };

  export const obtenerRecetaAPI = async (id) => {
    try {
      const respuesta = await fetch(`${URI_Receta}/${id}`);
      console.log(respuesta);
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };

  export const modificarRecetaAPI = async (receta, id) => {
    try {
      const respuesta = await fetch(`${URI_Receta}/${id}`,{
        method: "PUT",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(receta)
      })
      console.log(respuesta);
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };