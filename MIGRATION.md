<h1>Migration Guide</h1>

- [From version 1.x to 2.0.x](#from-version-1x-to-20x)
  - [Date Input](#date-input)

# From version 1.x to 2.0.x

## Date Input

We updated the React  DatePicker from 1.X to 3.X. The library no longer uses moment. The library uses DateFns as dependency for the date management. Therefore, The Date Input no longer uses moment object for the value, but a Javascript Date object. Also, the onChange Callbackk return a Date value instead of a moment Value.

The locale param can have 5 values : 
- fr-FR : French (by default)
- de-DE : Dutsh
- es-ES : Spanish
- en-GB : English (UK)
- en-US : English (US)

If you need to make another one, please open an [issue](https://github.com/AxaGuilDEv/react-toolkit/issues).

We also added a *format* param wich permit to specify the way to diplay value in viewvalue and in the field. He have to be a [unicode format](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table)

In 1.X : 

```javascript
 <DateInput
      label='Enter en date'
      locale='fr-fr'
      value={moment('11/26/2017', 'MM/DD/YYYY')}
    />
```

In 2.0.x

```javascript
 <DateInput
      label='Enter en date'
      locale='fr-FR'
      value={new Date('11-26-2017')}
      format='dd/MM/yyyyy'
    />
```




