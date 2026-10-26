import { getImageUrl } from '../utils/getImageUrl.jsx';
export function Profile({ name, imageId, profession, awards, discovery }) {
  return (
    <section className="profile">
      <h2>{name}</h2>

      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={70}
        height={70}
      />

      <ul>
        <li>
          <b>Profesión: </b>
          {profession}
        </li>

        <li>
          <b>Premios: {awards.count} </b>
          ({awards.description})
        </li>

        <li>
          <b>Descubrió: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}