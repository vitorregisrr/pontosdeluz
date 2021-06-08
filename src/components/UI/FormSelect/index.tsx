import { useState } from 'react'
import chroma from 'chroma-js'
import makeAnimated from 'react-select/animated'
import { StyledIcon } from 'styled-icons/types'
import Select from 'react-select'

import * as S from './styles'

type ValuesProps = { value: string; label: string; color?: string }[]

type FormSelectProps = {
  placeholder?: string
  options: ValuesProps
  style?: string
  Icon?: StyledIcon
  onChange?: () => void
  sendValueHandler?: () => void
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
  onChange,
  Icon,
  sendValueHandler,
}: FormSelectProps) => {
  const [selectedValues, setSelectedValues] = useState()

  const handleChange = (values: ValuesProps) => {
    //@ts-ignore
    setSelectedValues(values)
    //@ts-ignore
    sendValueHandler(values.map((v) => v.value))
  }

  return (
    <S.FormSelectWrapper className="select-wrapper">
      <Select
        classNamePrefix="react-select"
        value={selectedValues}
        onChange={(v) => handleChange(v)}
        options={options}
        isMulti
        placeholder={placeholder}
        closeMenuOnSelect={true}
        components={animatedComponents}
        styles={colourStyles}
      />

      {/* @ts-ignore */}
      {Icon ? <Icon className="icon" /> : null}
    </S.FormSelectWrapper>
  )
}

export default FormSelect
