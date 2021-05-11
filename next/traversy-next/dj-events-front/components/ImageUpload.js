import { useState } from 'react'
import { API_URL } from '@/config/index'
import styles from '@/styles/Form.module.css'

export default function ImageUpload({ evtId, imageUploaded }) {

  const [ image, setImage ] = useState(null)

  const handleSubmit = async e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('files', image)
    formData.append('ref', 'events')
    formData.append('refId', evtId)
    formData.append('field', 'image')

    const res = await fetch(`${API_URL}/upload`, {
      method: 'POST',
      body: formData
    })

    if (res.ok) {
      imageUploaded()
    }
  }
  const handleFileChange = e => {
    console.log(e.target.files)
    setImage(e.target.files[0])
  }

  return (
    <div className={styles.form}>
      <h1>Image upload ...</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.file}>
          <input type='file' onChange={handleFileChange} />
        </div>
        <input className='btn' type='submit' value='Upload'/>
      </form>
    </div>
  )
}
