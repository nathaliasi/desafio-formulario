import styled from "styled-components";

export const Container = styled.div`
  min-width: 100%;
  .bola{
    display: flex;
    background: #c4c4c4;
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }

  .topo{
    align-item: center;
    margin-left: 10px;
    margin-top: 13px;
  }

  .topoWpp{
    position: fixed;
    right: 20px;
    height: 60px;
    bottom: 60px;

  }
  
`;

export const Area = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Steps = styled.div`
flex: 1;
display: flex;
background: #FFFFFF;
`;

export const Inst = styled.div`
  .institucional{
    display: flex;
   
  }
  .h2-inst{
    font-weight: 100;
    text-transsform: uppercase;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    margin-bottom: 0px;
  }
   .home{
    display: flex;
    gap: 10px;
    margin-top: 20px;
    margin-left: 50px;
   }

   .txt-inst{
    margin-top: 6px;
    font-weight: 20;
    font-size: 0.7em;
    color: #C4C4C4;
    font-family: roboto;
   }

   .casinha{
    margin-top: 4px;
   }
`;

export const Sidebar = styled.div`
  width: 250px;
  margin-left: 40px;
  
`;



export const Page = styled.div`
  flex: 1;
  padding-left: 20px;
  width: 100%;
  max-width: 70%;
  //background: #D2691E;
`;

export const Section =  styled.div`
  display: flex;
  margin-top: 100px;
  margin-bottom: 100px
  width:100%;
  height: 130px;
  border-top: 1px solid #C4C4C4;
  border-bottom: 1px solid #C4C4C4;
   .inputlabel{
    margin-left: 500px;
    
    
   }

   .input{
    padding: 8px;
    width: 300px;
   }

   button{
    padding: 10px;
    width: 100px;
    margin-left: 5px;
    background: #00C8FF;
    border: none;
    border-radius: 3px;
    color: #FFF;
    cursor: pointer;
   }

   .input,
   button{
    margin-bottom: 30px;
   }
`;

export const Footer1 =  styled.div`
   .footer1{
    display: grid;
    grid-template-columns: auto auto auto auto;
    margin-left: auto;
    margin-right: auto;
    width: 75%;
     
   }
    li{
      list-style: none;
      margin-bottom: 4px;
      margin-top: 4px;
    }

    a{
      text-decoration: none;
      color: #000;
    }

    .footer1-redes{
      margin-top: 30px;   
    }
`

export const Footer2 =  styled.div`
    .footer2{
      background: #585858;
      display: flex;
      margin-left: auto;
      margin-right: auto;
    }

    .div-txt{
      display: flex;
      margin: 0 auto;
      width: 100%;
    }

    .txt{
      margin-left: 20px;
      max-width: 30%;
      color: #FFF;
      font-size: .9em;
    }

    .pagamentos{
      display: flex;
      margin: 0;
      gap: 10px;
      margin-top: 20px;
    }

    .powred{
      margin-left: 300px;
      margin-top: 30px;
    }
`