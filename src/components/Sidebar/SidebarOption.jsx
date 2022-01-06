import { OptionContainer } from './SidebarStyles';

const SidebarOption = ({ active, hideInPhone, text, Icon }) => {
  return (
    <OptionContainer active={active} hideInPhone={hideInPhone}>
      <Icon />
      <span>{text}</span>
    </OptionContainer>
  );
};

export default SidebarOption;
