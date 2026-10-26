import { getImageUrl } from '../utils/getImageUrl.jsx';
import { Profile } from './Profile.jsx';

export default function Gallery() {
  return (
    <div>
      <h1>Challenge 1</h1>
      <h2>Científicos Notables</h2>

      <Profile
        name="Maria Skłodowska-Curie"
        imageId="szV5sdG"
        profession="física y química"
        awards={{
          count: 4,
          description:
            'Premio Nobel de Física, Premio Nobel de Química, Medalla Davy, Medalla Matteucci'
        }}
        discovery="polonio (elemento químico)"
      />

      <Profile
        name="Katsuko Saruhashi"
        imageId="YfeOqp2"
        profession="geoquímica"
        awards={{
          count: 2,
          description: 'Premio Miyake de geoquímica, Premio Tanaka'
        }}
        discovery="un método para medir el dióxido de carbono en el agua de mar"
      />
    </div>
  );
}