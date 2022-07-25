import * as C from './styles';
import { NavLink } from 'react-router-dom';
import Logo from '../../img/logo.png';
import Lupa from '../../img/lupa.png';
import Carrinho from '../../img/carrinho.png';

export const Header = () => {
  return (
    <C.Container>
      <div className='container'  id='topo'>
      <NavLink to="/">
       <img className='logo' src={Logo} />
      </NavLink>
      <div className='search'>
      <input type="text" placeholder='Buscae' />
      <button className='buttonSearch'><img src={Lupa}/></button>
      </div>
      <div className='entrarCarrinho'>
      <NavLink className='entrar' to="#">
        <p>Entrar</p>
      </NavLink>
      <NavLink className='carrinho' to="/">
        <img  src={Carrinho} />
      </NavLink>
      </div>
      <hr/>
      <div className='cursoSaibamais'>
      <NavLink className='cursos' to="#">
        <p>Cursos</p>
      </NavLink>
      <NavLink className='saibamais' to="#">
        <p>Saiba Mais</p>
      </NavLink>
      </div>
      </div>
      
      
    </C.Container>
  );
};
