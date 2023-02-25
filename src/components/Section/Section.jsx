import PropTypes from 'prop-types';
import { Section, Title } from './Section.styled';

export const FeedbackSection = ({ title, children }) => {
  return (
    <Section>
      <Title>{title}</Title>
      {children}
    </Section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
