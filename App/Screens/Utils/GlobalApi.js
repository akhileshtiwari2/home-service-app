import { request, gql } from 'graphql-request'


const MASTER_URL="https://api-ap-south-1.hygraph.com/v2/cltqpw9nk0gcw07th30bk1uxb/master"

    
    const getSlider = async () => {
        const query = gql`
            query GetSlider {
                sliders {
                    id
                    name
                    image {
                        url
                    }
                }
            }
        `;
const result=await request(MASTER_URL, query);
return result;

}

const getCategories = async ()=>{
    const query = gql`
    query GetCategory {
        categories {
          id
          name
          icon {
            url
          }
        }
      }
      
    
    `
    const result=await request(MASTER_URL, query);
    return result;
}

export default{
    getSlider,
    getCategories
}
