import CategoriesItem from '../CategoriesItem/CategoriesItem.jsx';
import css from './Categories.module.css';

const Categories = ({ nannie }) => {
  return (
    <div className={css.wrapperCategories}>
      <CategoriesItem icon="icon-transmission" text={nannie.transmission} />
      <CategoriesItem icon="icon-engine" text={nannie.engine} />
      {nannie.kitchen && <CategoriesItem icon="icon-kitchen" text="Kitchen" />}
      {nannie.AC && <CategoriesItem icon="icon-ac" text="AC" />}
      {nannie.TV && <CategoriesItem icon="icon-tv" text="TV" />}
      {nannie.radio && <CategoriesItem icon="icon-radio" text="radio" />}
      {nannie.refrigerator && (
        <CategoriesItem icon="icon-refrigerator" text="refrigerator" />
      )}
      {nannie.bathroom && (
        <CategoriesItem icon="icon-bathroom" text="bathroom" />
      )}
      {nannie.microwave && (
        <CategoriesItem icon="icon-microwave" text="microwave" />
      )}
      {nannie.gas && <CategoriesItem icon="icon-gas" text="gas" />}
      {nannie.water && <CategoriesItem icon="icon-water" text="water" />}
    </div>
  );
};

export default Categories;
