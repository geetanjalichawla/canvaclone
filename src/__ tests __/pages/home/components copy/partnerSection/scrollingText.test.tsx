import { render } from '@testing-library/react';
import ScrollText from '../../../../../pages/home/components/partnerSection/scrollingText';
import '@testing-library/jest-dom';

const dummyImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANcAAACUCAMAAAA3b0xFAAAAY1BMVEUAAABjY2Px8fHq6urJycnMzMxVVVXf399HR0f09PShoaFycnIZGRnS0tLPz8/CwsJsbGw+Pj4mJib///+Ojo6Hh4epqal4eHhaWlpNTU0ODg6UlJSAgIAwMDDZ2dm7u7uysrIRnExfAAADfElEQVR4nO3X6ZKkKBQGUBEUcF9SXDJd3v8pG0XQnKqKdqK6nI6J7/zIEE2RK9creh4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPyflKQouvFoxaQ8Dor35m+IxG4NfVGEruVVnW5+d6D/SvJMtSAtTDPK0ilN1T6iMuLZlE6P5Ovzz2Jux07ytVe2d+q1QZpmfLkxsmrmbViW4avbmjl99WXf8mlrlUEai7J/+epSYILWxGyFdOnKsluoCayRkb4GmWn3AxF8TvFzlj1qk4+VjPTvoCZzkPjtha6SXMk9Lqr23uX6K+jD/GEOxk/P/PMIJeeR0WbfKmSlp8uFo9ILE/acBt/0Fkm7bwtQscG0ehp/e8TXqPzcav3Bbvr6Fr94tbcIdbM6HvPbvwXb6aTb5ytQdueTr309bXNe/siof2uYnuemmlxcmR5B7oKuuK0A3pPZXGrfUtjjuisTl+AuCUpfeIl09SLig3eHRD/JL+5LqrbBzsfsKaZHurhmGrmRBszMIqkf567mzLNxEd8FUvmxF/ruqWr9i5X1mwQNOSfj2E1UP0pDfszeK622XNzls9usWLAGRurXuacHXX9NXDEXdnfCH15M3b9CeU9cncz2UCKqE4YdgbRT5Z1GnrPjpJHllRfXjXcSTltFMHG9jgQddHY2/0FctZ2HJFVX49Izljf+W1gDW7YH5++JyxXeiF7MQ23M3pNQ1wMz3o95SN/ysLsrLr+3m3F9rW6siKR5dWp3cq8MOq7hb6gbpXQVua3Xxcd7nXfJd6rzWlE3CWOnwCiN1Kae1RLrOu/+LXSdH6RbPt1V5wfqUk3nodceabI+Py23N/r0Xl7/pY+NOTvWRE1kPOsliooP72V6+3v5lHlsvaQL06yjqFtHZUf+FHIrGVVwnrHdPjNPt47y1/yN7Nn3raM6ude1ZlsUNLV53ka53eJoLwCFPMbj3lsjyz4EZtOa72XGrnvNhFX5J7fihzRSESGI8s1oZ9qEImxotrXGnMe96Bp5qhoPl1Tj8uGD08YlaE763n2YtL7qRF8wfuMHWJunLJhm+6Q/gjTIMhvH+JwCvaP56uR/yuzAwzkNWJrbglFsF1Hiq/N+QhIScrqPY0e601dSqQ9eT57yeAx7QsRR/NaL3BoVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8uF9jpiwryIuTIQAAAABJRU5ErkJggg==';

describe('ScrollText component', () => {
  it('renders ScrollText component with images', () => {
    const images = [dummyImage,dummyImage];
    const { getByAltText } = render(<ScrollText images={images} />);
    images.forEach((imageUrl, index) => {
      const imageElement = getByAltText(`Image ${index}`);
      expect(imageElement).toBeInTheDocument();
      expect(imageElement).toHaveAttribute('src', imageUrl);
    });
  })

});