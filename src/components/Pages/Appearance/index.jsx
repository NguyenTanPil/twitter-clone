import { Container, Header } from '../Profile/ProfileStyles';
import { NavLink } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { FaCircle } from 'react-icons/fa';
import { BsCheckLg } from 'react-icons/bs';
import {
  Body,
  Intro,
  Customize,
  CustomizeItem,
  ColorPicker,
  BackgroundPicker,
  PickerItem,
} from './AppearanceStyles';
import { useState } from 'react';

const colors = ['blue', 'yellow', 'pink', 'purple', 'orange', 'green'];
const backgrounds = ['light', 'dim', 'dark'];

const Appearance = ({ setTheme }) => {
  const [color, setColor] = useState('blue');
  const [background, setBackground] = useState('light');

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
            Manage your color, and background. These settings affect all the
            Twitter accounts on this browser.
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
                      onChange={() => setColor(colorItem)}
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
                      onClick={() => setTheme(backgroundItem)}
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
