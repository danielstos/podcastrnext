import styled from "styled-components";


const HomepageContainer = styled.div`


    

    h2{
        color:${props => props.theme.colors.text.primary};
        margin-top: 3rem;
        margin-bottom: 1.5rem;
        transition: all .5s linear;
       }

       li{
           background:${props => props.theme.colors.background.secundary};
           transition: all .5s linear;
            border: 1px solid ${props => props.theme.colors.text.primary};
       }



       a{
        color:${props => props.theme.colors.text.primary};
        transition: all .5s linear;
       }
    

    
      
     
  

`
export default HomepageContainer;