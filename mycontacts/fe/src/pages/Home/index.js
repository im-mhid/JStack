import { Link } from 'react-router-dom';
import {
  Container, InputSearchContainer, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>
      <Header>

        <strong>3 contatos</strong>
        <Link to="/new">Novo Contato</Link>
      </Header>
      <ListContainer>
        <header>
          <button type="button">
            <span>
              Nome
            </span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Matheus Dias</strong>
              <small>instagram</small>
            </div>
            <span>matheus@email.com</span>
            <span>(31)98989-9898</span>
          </div>
          <div className="actions">
            <Link to="/edit/123"><img src={edit} alt="Edit" /></Link>
            <button type="button">
              <img src={trash} alt="Trash" />
            </button>
          </div>
        </Card>

      </ListContainer>
    </Container>
  );
}
