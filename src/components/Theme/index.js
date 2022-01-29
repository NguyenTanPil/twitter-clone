const light = {
  backgroundColor: '#fff',
  titleColor: '#000',
  twitterColor: '#1d9bf0',
  shapeColor: '#f7f9f9',
  twitterBackgroundColor: '#e6efc0',
  border: '#eff3f4',
  itemHover: '#e8f5fe',
  fontColor: '#536471',
};

const dim = {
  backgroundColor: '#15202b',
  titleColor: '#fff',
  twitterColor: '#1d9bf0',
  shapeColor: '#192734',
  twitterBackgroundColor: '#e6efc0',
  border: '#38444d',
  itemHover: '#eff3f41a',
  fontColor: '#8899a6',
};

const dark = {
  backgroundColor: '#000',
  titleColor: '#fff',
  twitterColor: '#1d9bf0',
  shapeColor: '#15181c',
  twitterBackgroundColor: '#e6efc0',
  border: '#1b2528',
  itemHover: '#eff3f41a',
  fontColor: '#aaa398',
};

const colors = {
  blue: '#1d9bf0',
  yellow: '#ffd400',
  pink: '#f91880',
  purple: '#7856ff',
  orange: '#ff7a00',
  green: '#00ba7c',
};
const backgrounds = {
  light,
  dim,
  dark,
};

export default function getTheme({ background, color }) {
  const theme = backgrounds[background];
  theme.twitterColor = colors[color];
  return theme;
}
