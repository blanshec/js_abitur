import React, { Component } from 'react';
import './schooluploader.css';
import SchoolDropzone from '../dropzone/Dropzone';

class SchoolUploader extends Component {
  render() {
    return (
      <div className='school-uploader'>
        <h2>
          Загрузите CSV файл, содержащий информацию о программах факультета
        </h2>
        <SchoolDropzone />

        <h3>
          Вы можете скачать форму для заполнения{' '}
          <a href='https://www.example.com/'>здесь</a>
        </h3>
      </div>
    );
  }
}

export default SchoolUploader;
