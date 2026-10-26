import { getImageUrl } from '../utils/getImageUrl.jsx';
import { Avatar } from './Avatar.jsx';

export default function Profile() {
  return (
    <div>
        <h1>Challenge 2</h1>
      <h2>Imagenes atravez de props</h2>
      <Avatar
        size={40}
        person={{
          name: 'Gregorio Y. Zara',
          imageId: '7vQD0fP'
        }}
      />

      <Avatar
        size={100}
        person={{
          name: 'Gregorio Y. Zara',
          imageId: '7vQD0fP'
        }}
      />
    </div>
  );
}