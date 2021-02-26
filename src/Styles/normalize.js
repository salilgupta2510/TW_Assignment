import { Dimensions, PixelRatio } from 'react-native';

export var { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const wscale = SCREEN_WIDTH / 375;
const hscale = SCREEN_HEIGHT / 812;

const wp = (size) => {
  return normalize(size);
};

const hp = (size) => {
  return normalize(size, 'height');
};

const fp = (size) => {
  return wp(size);
};

const spV = (size) => {
  return hp(size);
};

const spH = (size) => {
  return wp(size);
};

const mpAll = (size) => {
    return {
      marginLeft: spH(size),
      marginRight: spH(size),
      marginTop: spV(size),
      marginBottom: spV(size),
    };
  };


function normalize(size, based = 'width') {
  const newSize = based === 'height' ? size * hscale : size * wscale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export { normalize, wp, hp, fp, spH, spV, mpAll };
