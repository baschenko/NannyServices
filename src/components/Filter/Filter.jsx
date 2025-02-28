import { Field, Form, Formik } from 'formik';
import css from './Filter.module.css';
import Icon from '../Icon/Icon.jsx';
import Button from '../Button/Button.jsx';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filter/filtersSlice.js';

const Filter = () => {
  const dispatch = useDispatch();

  const initialValues = {
    location: '',

    AC: false,
    kitchen: false,
    TV: false,
    bathroom: false,
    refrigerator: false,
    microwave: false,
    gas: false,
    water: false,
    transmission: '',
    engine: '',

    form: '',
  };

  const optionsTransmission = [
    { value: 'automatic', label: 'Automatic' },
    { value: 'manual', label: 'Manual' },
    { value: '', label: 'Automatic' },
  ];

  const optionsEngine = [
    { value: 'petrol', label: 'Petrol' },
    { value: 'diesel', label: 'Diesel' },
    { value: 'hybrid', label: 'Hybrid' },
    { value: '', label: 'Petrol' },
  ];

  const CustomSelectButtonTransmission = ({ field, form, options }) => {
    const currentOptionIndex = options.findIndex(
      option => option.value === field.value
    );

    const handleClickTransmission = () => {
      const nextIndex = (currentOptionIndex + 1) % options.length;
      form.setFieldValue(field.name, options[nextIndex].value);
    };

    const currentLabel = options[currentOptionIndex]?.label || 'Choise';
    return (
      <button
        type="button"
        onClick={handleClickTransmission}
        className={css.btnFilter}
      >
        {currentLabel}
      </button>
    );
  };

  const handleSubmit = values => {
    dispatch(changeFilter(values));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => (
        <Form className={css.wrapper}>
          <label className={css.label}>
            Location
            <div className={css.iconWrapper}>
              <span className={css.icon}>
                <Icon id="icon-map" width={16} height={16} />
              </span>
              <Field
                type="text"
                name="location"
                className={css.input}
                placeholder="City"
              />
            </div>
          </label>
          <p className={css.text}>Filters</p>
          <div id="checkbox-group" className={css.subTitle}>
            Vehicle equipment
          </div>
          <div
            role="group"
            aria-labelledby="checkbox-group"
            className={css.filtersBlock}
          >
            <label className={values.AC ? css.active : undefined}>
              <Field type="checkbox" name="AC" />
              <Icon id="icon-ac" width={32} height={32} />
              AC
            </label>
            <label className={values.transmission ? css.active : undefined}>
              <Icon id="icon-transmission" width={32} height={32} />
              <Field name="transmission">
                {({ field, form }) => (
                  <CustomSelectButtonTransmission
                    field={field}
                    form={form}
                    options={optionsTransmission}
                  />
                )}
              </Field>
            </label>
            <label className={values.kitchen ? css.active : undefined}>
              <Field type="checkbox" name="kitchen" />
              <Icon id="icon-kitchen" width={32} height={32} />
              Kitchen
            </label>
            <label className={values.TV ? css.active : undefined}>
              <Field type="checkbox" name="TV" />
              <Icon id="icon-tv" width={32} height={32} />
              TV
            </label>
            <label className={values.bathroom ? css.active : undefined}>
              <Field type="checkbox" name="bathroom" />
              <Icon id="icon-bathroom" width={32} height={32} />
              Bathroom
            </label>

            <label className={values.engine ? css.active : undefined}>
              <Icon id="icon-engine" width={32} height={32} />
              <Field name="engine">
                {({ field, form }) => (
                  <CustomSelectButtonTransmission
                    field={field}
                    form={form}
                    options={optionsEngine}
                  />
                )}
              </Field>
            </label>

            <label className={values.refrigerator ? css.active : undefined}>
              <Field type="checkbox" name="refrigerator" />
              <Icon id="icon-refrigerator" width={32} height={32} />
              Refrigerator
            </label>
            <label className={values.microwave ? css.active : undefined}>
              <Field type="checkbox" name="microwave" />
              <Icon id="icon-microwave" width={32} height={32} />
              Microwave
            </label>
            <label className={values.gas ? css.active : undefined}>
              <Field type="checkbox" name="gas" />
              <Icon id="icon-gas" width={32} height={32} />
              Gas
            </label>
            <label className={values.water ? css.active : undefined}>
              <Field type="checkbox" name="water" />
              <Icon id="icon-water" width={32} height={32} />
              Water
            </label>
          </div>
          <div id="radio-group" className={css.subTitle}>
            Vehicle type
          </div>
          <div
            role="group"
            aria-labelledby="radio-group"
            className={css.filtersBlock}
          >
            <label
              className={values.form === 'panelTruck' ? css.active : undefined}
            >
              <Field
                type="radio"
                name="form"
                value="panelTruck"
                onClick={() => {
                  if (values.form === 'panelTruck') {
                    setFieldValue('form', '');
                  } else {
                    setFieldValue('form', 'panelTruck');
                  }
                }}
              />
              <Icon id="icon-van" width={32} height={32} />
              Van
            </label>
            <label
              className={
                values.form === 'fullyIntegrated' ? css.active : undefined
              }
            >
              <Field
                type="radio"
                name="form"
                value="fullyIntegrated"
                onClick={() => {
                  if (values.form === 'fullyIntegrated') {
                    setFieldValue('form', '');
                  } else {
                    setFieldValue('form', 'fullyIntegrated');
                  }
                }}
              />
              <Icon id="icon-fully" width={32} height={32} />
              Fully Integrated
            </label>
            <label
              className={values.form === 'alcove' ? css.active : undefined}
            >
              <Field
                type="radio"
                name="form"
                value="alcove"
                onClick={() => {
                  if (values.form === 'alcove') {
                    setFieldValue('form', '');
                  } else {
                    setFieldValue('form', 'alcove');
                  }
                }}
              />
              <Icon id="icon-alcove" width={32} height={32} />
              Alcove
            </label>
          </div>
          <Button type="submit" className={css.btn}>
            Search
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Filter;
