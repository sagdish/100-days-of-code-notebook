import { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { API_URL } from '@/config/index'
import styles from '@/styles/Form.module.css'
import Layout from '@/components/Layout'
import AuthContext from '@/context/AuthContext'

export default function AddEventPage() {
  const [values, setValues] = useState({
    name: '',
    performers: '',
    venue: '',
    address: '',
    date: '',
    time: '',
    description: '',
  })

  const { create, error } = useContext(AuthContext)

  useEffect(() => error && toast.error(error))

  const router = useRouter()

  const handleSubmit = async e => {
    e.preventDefault()
    // console.log(values)

    // Validation:
    const hasEmptyFields = Object.values(values).some(
      field => field === ''
    )
    if (hasEmptyFields) {
      console.error('Please fill in all fields')
      toast.error('Please fill in all fields')
      return
    }

    create({values})
  }

  const handleInputChange = e => {
    const {name, value} = e.target
    setValues({ ...values, [name]: value })
  }

  return (
    <Layout title='Add New Event'>
      <Link href='/events'>Go Back</Link>
      <h1>Add Event</h1>
      <ToastContainer />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div>
            <label htmlFor='name'>Event Name</label>
            <input
              type='text'
              id='name'
              name='name'
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='name'>Performers</label>
            <input
              type='text'
              id='performers'
              name='performers'
              value={values.performers}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='name'>Venue</label>
            <input
              type='text'
              id='venue'
              name='venue'
              value={values.venue}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='name'>Address</label>
            <input
              type='text'
              id='address'
              name='address'
              value={values.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='name'>Date</label>
            <input
              type='date'
              id='date'
              name='date'
              value={values.date}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='name'>Time</label>
            <input
              type='text'
              id='time'
              name='time'
              value={values.time}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor='description'>Event Description</label>
          <textarea 
            type='text'
            name='description'
            id='description'
            value={values.description}
            onChange={handleInputChange}
          />
        </div>

        <input type='submit' value='Add Event' className='btn' />
      </form>
    </Layout>
  )
}
