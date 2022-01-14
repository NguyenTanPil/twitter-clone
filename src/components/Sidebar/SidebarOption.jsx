import { OptionContainer, OptionContent } from './SidebarStyles';

const SidebarOption = ({ path, hideInPhone, text, Icon }) => {
  return (
    <OptionContainer hideInPhone={hideInPhone}>
      <OptionContent to={path}>
        <Icon />
        <span>{text}</span>
      </OptionContent>
    </OptionContainer>
  );
};

export default SidebarOption;
