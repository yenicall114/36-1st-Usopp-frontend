import NavBarCategorie from './NavBarCategorie';
import NavBarCategorieTwo from './NavBarCategorieTwo';
import NavBarImg from './NavBarImg';
import './Categorie.scss';

const Categorie = ({ data, color }) => {
  return (
    <div className={`categorieMain ${color}`}>
      <div className="leftCategorie">
        <div className="titlle">
          <a href="/" className="titlleName">
            Usopp
          </a>
        </div>
        <div className="categorieLeft">
          <ul>
            {data.left.map(cate => (
              <NavBarCategorie key={cate.id} name={cate.name} />
            ))}
          </ul>
        </div>
      </div>
      <div className="centerCategorie">
        <div className=" categorieAroma">
          <ul>
            {data.center.map(two => (
              <NavBarCategorieTwo key={two.id} name={two.name} />
            ))}
          </ul>
        </div>
      </div>
      <div className="rightCategorie">
        {data.right.map(img => (
          <NavBarImg key={img.id} img={img.img} />
        ))}
      </div>
    </div>
  );
};
export default Categorie;
