import { Container, Content, OverWrap } from './EmojiModelStyles';
import Picker from 'emoji-picker-react';

const EmojiModel = ({ setShowEmojiModel, setPostContent }) => {
  const onEmojiClick = (event, emojiObject) => {
    setPostContent((prev) => {
      return prev + emojiObject.emoji;
    });
  };

  return (
    <Container>
      <Content>
        <Picker preload={true} onEmojiClick={onEmojiClick} />
      </Content>
      <OverWrap onClick={() => setShowEmojiModel(false)} />
    </Container>
  );
};

export default EmojiModel;
