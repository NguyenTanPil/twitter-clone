import { Container, Content, OverWrap } from './EmojiModelStyles';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

const EmojiModel = ({ setShowEmojiModel, setPostContent }) => {
  const onEmojiClick = (emoji, event) => {
    setPostContent((prev) => {
      return prev + emoji.native;
    });
  };

  return (
    <Container>
      <Content>
        <Picker set="twitter" autoFocus onClick={onEmojiClick} />
      </Content>
      <OverWrap onClick={() => setShowEmojiModel(false)} />
    </Container>
  );
};

export default EmojiModel;
