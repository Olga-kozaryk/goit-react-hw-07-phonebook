import styled from "styled-components";

const List = styled('ul')(() => {
    return {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',

        padding: '20px',
        borderRadius: '10px',
        li:{
            backgroundColor: '#fff',
            border: '2px solid #a264cb',
            padding:' 10px',
            borderRadius:' 10px',
            marginBottom:' 10px',
            display: 'flex',
            justifyContent: 'space-between',
           
          }
    }
})
export default List