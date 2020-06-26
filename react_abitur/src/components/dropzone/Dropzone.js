import React from 'react';
import { useDropzone } from 'react-dropzone';
import './dropzone.css';

function SchoolDropzone(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li className='dropzoneItem' key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className='container'>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Перетащите CSV файл сюда</p>
      </div>
      <aside>
        <h4>Файлы</h4>
        <ul className='dropzone-ul'>{files}</ul>
      </aside>
    </section>
  );
}

export default SchoolDropzone;
