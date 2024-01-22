import {  render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ImageComponent } from '../../../../../pages/home/components/HeroSection/ImageComponent';

test('image component from carousel', () => {
  const imageData = {
    img: 'image.jpg',
    title: 'Image Title',
    className: 'custom-class',
  };

  const {getByAltText, getByText} = render(<ImageComponent index={1} image={imageData} />);

  const imageElement = getByAltText(imageData.title);
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute('src', imageData.img);

  const titleElement = getByText(imageData.title) as HTMLElement | null;
  expect(titleElement).toBeInTheDocument();
  expect(titleElement?.textContent?.includes(imageData.title)).toBeTruthy()
  expect(titleElement?.classList.contains(imageData.className)).toBeTruthy()
});
