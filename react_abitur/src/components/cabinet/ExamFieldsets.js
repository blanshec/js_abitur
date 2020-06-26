import React, { Component } from 'react';

class ExamFieldsets extends Component {
  constructor(props) {
    super(props);
    this.exams = props.props;
  }

  render() {
    const exams = this.exams;
    const renderedItems = exams.map((exam) => (
      <fieldset className='exams__fieldset'>
        <label className='exams__label' for={exam.name}>
          {exam.label}
        </label>
        <input
          className='input exam-grade'
          name={exam.name}
          value={exam.value}
        ></input>
      </fieldset>
    ));
    return <div className='exams__container'>{renderedItems}</div>;
  }
}

export default ExamFieldsets;
