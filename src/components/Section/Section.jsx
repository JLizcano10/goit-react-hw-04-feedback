import { SectionTitle } from './Section.styles';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
