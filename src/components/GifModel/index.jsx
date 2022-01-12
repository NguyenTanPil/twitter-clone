import {
  Container,
  Content,
  Header,
  CloseButton,
  Body,
  GifContainer,
} from './GifModelStyles';
import { AiOutlineClose } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { SearchInput } from '../Wedgets/WedgetsStyles';
import { useState, useEffect } from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';
const giphyFetch = new GiphyFetch(process.env.REACT_APP_GIPHY_API_KEY);

const Model = ({ setShowGifModel, handleChosenGif }) => {
  const [searchMessage, setSearchMessage] = useState('');
  const [gifList, setGifList] = useState([]);

  useEffect(() => {
    let isSubscribed = true;

    const fetchGif = async () => {
      // fetch gif in giphy
      try {
        let response;
        if (searchMessage) {
          response = await giphyFetch.search(searchMessage, {
            sort: 'relevant',
            limit: 10,
          });
        } else {
          response = await giphyFetch.trending({ limit: 10 });
        }

        const gifs = response.data.map((gif) => ({
          id: gif.id,
          url: gif.images.fixed_height.url,
        }));

        if (isSubscribed) {
          setGifList(gifs);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchGif();

    return () => {
      isSubscribed = false;
    };
  }, [searchMessage]);

  return (
    <Container>
      <Content>
        <Header>
          <SearchInput>
            <div>
              <BiSearch />
            </div>
            <input
              type="text"
              placeholder="Search GIF"
              value={searchMessage}
              onChange={(e) => setSearchMessage(e.target.value)}
            />
          </SearchInput>
          <CloseButton onClick={() => setShowGifModel(false)}>
            <AiOutlineClose />
          </CloseButton>
        </Header>
        <Body>
          {gifList.map((gif) => (
            <GifContainer key={gif.id} onClick={() => handleChosenGif(gif.url)}>
              <div>
                <img src={gif.url} alt="" />
              </div>
            </GifContainer>
          ))}
        </Body>
      </Content>
    </Container>
  );
};

export default Model;
