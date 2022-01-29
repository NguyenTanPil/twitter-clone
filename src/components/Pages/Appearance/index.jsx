import { useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { FaCircle } from 'react-icons/fa';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { Container, Header } from '../Profile/ProfileStyles';
import {
  BackgroundPicker,
  Body,
  ColorPicker,
  Customize,
  CustomizeItem,
  Intro,
  PickerItem,
} from './AppearanceStyles';
import Cookies from 'universal-cookie';

const colors = ['blue', 'yellow', 'pink', 'purple', 'orange', 'green'];
const backgrounds = ['light', 'dim', 'dark'];

const Appearance = ({ theme, setTheme }) => {
  const [color, setColor] = useState(theme.color);
  const [background, setBackground] = useState(theme.background);

  const handleChangeTheme = ({ backgroundItem, colorItem }) => {
    const cookies = new Cookies();
    const data = {
      background: backgroundItem || background,
      color: colorItem || color,
    };
    const theme = JSON.stringify(data);

    cookies.set('theme', theme, {
      path: '/',
      maxAge: 60 * 60,
      sameSite: true,
    });

    if (colorItem) {
      setColor(colorItem);
    }

    if (backgroundItem) {
      setBackground(backgroundItem);
    }

    setTheme(data);
  };

  return (
    <Container>
      <Header>
        <NavLink to="/">
          <HiArrowNarrowLeft />
        </NavLink>
        <h2>Appearance</h2>
      </Header>
      <Body>
        <Intro>
          <h2>Customize your view</h2>
          <p>
            {' '}
            You can personalize your color, and background. These settings
            affect all the Twitter accounts on this browser.
          </p>
        </Intro>
        <Customize>
          <CustomizeItem>
            <label>Color</label>
            <ColorPicker>
              {colors.map((colorItem) => (
                <PickerItem key={colorItem}>
                  <label htmlFor={colorItem}>
                    <input
                      type="radio"
                      checked={color === colorItem}
                      name="color-picker"
                      id={colorItem}
                      onChange={() => handleChangeTheme({ colorItem })}
                    />
                    {color === colorItem && <BsCheckLg />}
                  </label>
                </PickerItem>
              ))}
            </ColorPicker>
          </CustomizeItem>
          <CustomizeItem>
            <label>Background</label>
            <BackgroundPicker>
              {backgrounds.map((backgroundItem) => (
                <PickerItem
                  active={background === backgroundItem ? 1 : 0}
                  key={backgroundItem}
                >
                  <label htmlFor={backgroundItem}>
                    <input
                      type="radio"
                      name="background-picker"
                      id={backgroundItem}
                      checked={background === backgroundItem}
                      onChange={() => setBackground(backgroundItem)}
                      onClick={() => handleChangeTheme({ backgroundItem })}
                    />
                    {background === backgroundItem ? (
                      <BsCheckLg />
                    ) : (
                      <FaCircle />
                    )}
                  </label>
                  <span>{backgroundItem}</span>
                </PickerItem>
              ))}
            </BackgroundPicker>
          </CustomizeItem>
        </Customize>
      </Body>
    </Container>
  );
};

export default Appearance;
