import React from 'react';
import Model from 'components/Model';
import { StoryContainer } from '../../../.storybook/StoryContainer';
import deviceModels from './deviceModels';
import phoneTexture from 'assets/mystgang-mobile.jpg';
import phoneTextureLarge from 'assets/mystgang-mobile-large.jpg';
import phoneTexturePlaceholder from 'assets/mystgang-mobile-placeholder.jpg';
import laptopTexture from 'assets/dtt.jpg';
import laptopTextureLarge from 'assets/dtt-large.jpg';
import laptopTexturePlaceholder from 'assets/dtt-placeholder.jpg';

export default {
  title: 'Model',
};

const modelStyle = { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 };

export const phone = () => (
  <StoryContainer fullWidth padding={32}>
    <Model
      style={modelStyle}
      cameraPosition={{ x: 0, y: 0, z: 10 }}
      alt="Phone Model"
      models={[{
        ...deviceModels.phone,
        position: { x: 0, y: 0, z: 0 },
        texture: {
          src: phoneTexture,
          srcSet: `${phoneTexture} 800w, ${phoneTextureLarge} 1440w`,
          placeholder: phoneTexturePlaceholder,
        },
      }]}
    />
  </StoryContainer>
);

export const laptop = () => (
  <StoryContainer fullWidth padding={32}>
    <Model
      style={modelStyle}
      cameraPosition={{ x: 0, y: 0, z: 8 }}
      alt="Laptop Model"
      models={[{
        ...deviceModels.laptop,
        position: { x: 0, y: 0, z: 0 },
        texture: {
          src: laptopTexture,
          srcSet: `${laptopTexture} 800w, ${laptopTextureLarge} 1440w`,
          placeholder: laptopTexturePlaceholder,
        },
      }]}
    />
  </StoryContainer>
);
