 import{config} ../
 export const PIZZASERVICES={
   async getDataUrl()={
    const response= await fetch(config.url);
    console.log(response);
    const data= response.json();
   }
}