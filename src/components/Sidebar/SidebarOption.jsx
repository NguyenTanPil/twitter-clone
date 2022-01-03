import { OptionContainer } from './SidebarStyles';

const SidebarOption = ({ active, text, Icon }) => {
  return (
    <OptionContainer active={active}>
      <Icon />
      <span>{text}</span>
    </OptionContainer>
  );
};

export default SidebarOption;
