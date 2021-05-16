import * as S from './styles'
import chroma from 'chroma-js'
import makeAnimated from 'react-select/animated'
import Select from 'react-select'

type FormSelectProps = {
  placeholder?: string
  options: { value: string; label: string; color?: string }[]
  style?: string
  onChange?: () => void
}

const animatedComponents = makeAnimated()

const colourStyles = {
  //@ts-ignore
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  //@ts-ignore
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color)
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor:
          !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    }
  },
  //@ts-ignore
  multiValue: (styles, { data }) => {
    const color = chroma(data.color)
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    }
  },
  //@ts-ignore
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  //@ts-ignore
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
}

const FormSelect = ({
  placeholder,
  options,
  style,
  onChange,
}: FormSelectProps) => {
  return (
    <S.FormSelectWrapper>
      <Select
        options={options}
        closeMenuOnSelect={false}
        components={animatedComponents}
        placeholder={placeholder}
        classNamePrefix="react-select"
        styles={colourStyles}
        isMulti
      />
    </S.FormSelectWrapper>
  )
}

export default FormSelect
