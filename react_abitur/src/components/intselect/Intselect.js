import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'physics', label: 'Физика' },
  { value: 'mathematics', label: 'Математика' },
  { value: 'computer_sci', label: 'Информатика' },
  { value: 'languages', label: 'Языки' },
  { value: 'arts', label: 'Исскуство' },
  { value: 'sociology', label: 'Социология' },
  { value: 'biology', label: 'Биология' },
  { value: 'pshychology', label: 'Психология' }
]

const Intselect = () => (
  <Select
    isMulti
    className="intselect"
    options={options} />
)

export default Intselect;