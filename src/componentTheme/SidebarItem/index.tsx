import { Link } from 'react-router-dom';
import * as C from './style';

type Props = {
  title: string;
  path: string;
  //active: boolean;
};

export const SidebarItem = ({ title, path }: Props) => {
  return (
    <C.Container>
      <Link to={path}>
        <C.Info>
          <C.Title id='azul'>{title}</C.Title>
        </C.Info>
      </Link>
    </C.Container>
  );
};
