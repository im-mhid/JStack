import PageHeader from '../../components/PageHeader';

import ContactForm from '../../components/ContactForm';

export default function NewContact() {
  return (
    <div>
      <PageHeader title="Novo contato" />
      <ContactForm buttonLabel="Cadastrar" />
    </div>
  );
}
