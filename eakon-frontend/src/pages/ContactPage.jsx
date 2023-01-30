import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LoadersModal from "../components/common/loaders/LoadersModal";
import ContactHero from "../components/contact/ContactHero";
import useContact from "../hooks/useContact";
import { fetchReadContactData } from "../redux/thunks/contactThunk";

const ContactPage = () => {
  const dispatch = useDispatch();
  const { loading, contactData } = useContact();

  useEffect(() => {
    document.title = '¡Contacto! I EAKON';
    Object.keys(contactData).length === 0 && dispatch(fetchReadContactData());
  }, []);

  return (
    <>
      {loading && <LoadersModal />}
      <ContactHero contactData={contactData} />
    </>
  );
};
export default ContactPage;