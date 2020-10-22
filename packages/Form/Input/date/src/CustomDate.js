import React from 'react';
import PropTypes from 'prop-types';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import { parse, format as dateFormat } from 'date-fns';
import { Input, withInput } from '@axa-fr/react-toolkit-form-core';

// Locales les plus courrantes
import es from 'date-fns/locale/es';
import en from 'date-fns/locale/en-GB';
import fr from 'date-fns/locale/fr';
import us from 'date-fns/locale/en-US';
import de from 'date-fns/locale/de';

const locales = {
  'es-ES': es,
  'en-GB': en,
  'fr-FR': fr,
  'de-DE': de,
  'en-US': us,
};

for (const [key, value] of Object.entries(locales)) {
  registerLocale(key, value);
}

const CustomDate = props => {
  const {
    className,
    classModifier,
    componentClassName,
    id,
    name,
    viewValue,
    value,
    locale,
    format,
    readOnly,
    disabled,
    onChangeRaw,
    onChange,
    ...otherProps
  } = props;

  let currentViewValue = '';
  if (value) {
    currentViewValue = dateFormat(value, format);
  } else if (viewValue != null && viewValue != undefined) {
    currentViewValue = viewValue;
  }

  return (
    <DatePicker
      id={id}
      selected={value}
      name={name}
      onChange={onChange}
      onChangeRaw={onChangeRaw}
      value={currentViewValue}
      locale={locale}
      className={componentClassName}
      readOnly={readOnly}
      disabled={disabled}
      {...otherProps}
    />
  );
};

const propTypes = {
  value: PropTypes.object,
  viewValue: PropTypes.string,
  locale: PropTypes.string,
  format: PropTypes.string,
};
const defaultClassName = 'af-datepicker';
const defaultProps = {
  value: null,
  viewValue: null,
  locale: 'fr-FR',
  format: 'dd/MM/yyyy',
  className: defaultClassName,
  fixedHeight: true,
  showMonthDropdown: true,
  showYearDropdown: true,
  autoFocus: false,
  todayButton: "Aujourd'hui",
  popperPlacement: 'right-start',
  yearDropdownItemNumber: 6,
};

const handlers = {
  onChange: ({ id, name, onChange, format }) => date => {
    const viewValue = date ? dateFormat(date, format) : '';
    onChange({
      value: date,
      viewValue,
      name,
      id,
    });
  },
  onChangeRaw: ({ format, id, name, onChange }) => event => {
    const dateString = event.target.value;
    if (dateString) {
      const date = parse(dateString, format, new Date());
      onChange({
        value: date,
        viewValue: dateString,
        name,
        id,
      });
    }
  },
};

const EnhancedComponent = withInput(
  defaultClassName,
  propTypes,
  defaultProps,
  handlers
)(CustomDate);

EnhancedComponent.Clone = Input.Clone;
EnhancedComponent.displayName = CustomDate.name;

export default EnhancedComponent;
