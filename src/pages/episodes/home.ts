import styled from "styled-components";


 const HomepageContainer = styled.div`


    padding: 0 4rem;
    height: calc(100vh - 6.5rem);
    overflow-y: scroll;
   

    h2{
        color:${props => props.theme.colors.text.primary};
        margin-top: 3rem;
        margin-bottom: 1.5rem;
        transition: all .5s linear;
       }

       li{
           background:${props => props.theme.colors.background.secundary};
           transition: all .5s linear;
       }



       a{
        color:${props => props.theme.colors.text.primary};
        transition: all .5s linear;
       }
        
     

`
export default HomepageContainer;