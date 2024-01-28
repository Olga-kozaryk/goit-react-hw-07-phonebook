const { default: styled } = require("styled-components")

const BtnDelete = styled('button')(()=>{
return {
    marginLeft: '10px',
    borderRadius:' 10px',
    cursor: 'pointer',
    background: 'linear-gradient(90deg, rgba(131,58,180,1) 1%, rgba(253,29,86,1) 62%, rgba(252,176,69,1) 100%);',
    '&:hover':{
        background: '#dd1033',
    }
}});

export default BtnDelete; 