import { Card } from "./Card";
export default function ProfileChildren() {
  return (
    <div>
      <h1>Challenge 3</h1>
      <h2>Childrens</h2>
      <Card>
        <h3>Foto</h3>
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </Card>

      <Card>
        <h3>Información</h3>
        <p>
          Aklilu Lemma fue un destacado científico etíope que descubrió
          un tratamiento natural para la esquistosomiasis.
        </p>
      </Card>
    </div>
  );
}