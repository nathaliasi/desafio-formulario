import styled from "styled-components";

export const Container = styled.div`
  background: #00C8FF;
  width: 100%;
  height: 120px;
 

  .logo{
    margin-top: 30px;
    margin-left: 40px;
  }

  .container{
    display: flex;
    width: 100%;
  }

  .search{
    display: flex;
    flex-direction: row;
    background: #FFF;
    width: 100%;
    max-width: 230px;
    border-radius: 4px;
    align-items: center;
    margin-left: 400px;
    margin-top: 30px;
  }

  input{
   border:  none;
   outline: 0;
   width: 100%;
   max-width: 230px;
   padding: 5px;
   border-radius: 4px ;
  }

  .buttonSearch{
    background: #FFFFFF;
    border: none;
    margin-bottom: 3px;
    border-radius: 4px;
    margin-right: 0px;
  }

  .entrar,
  .cursos,
  .saibamais
  {
    text-decoration: none;
    color: #FFF;
    font-family: roboto;
    text-transform: uppercase;
    font-size: .8em;  
  }

  .carrinho{
    margin-bottom: 10px;
    margin-right: 20px;
  }

  .entrarCarrinho{
    display: flex;
    gap: 30px;
    align-items: flex-end;
    margin-left: 450px;
  }

  .cursoSaibamais{
    display: flex;
    position: absolute;
    margin-top: 75px;    
    gap: 35px;
    justify-content: space-between;
    margin-left: 40px;
  }






 
`;