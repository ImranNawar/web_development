import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Label, Button, Input } from 'semantic-ui-react'

const FormikLogin = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    onSubmit: () => {

    },
    //Validation
    validationSchema: Yup.object({
      username: Yup.string().required().max(15, "Username should not exceed 15 characters").min(3, "Minimum of 3 characters are required"),
      password: Yup.string().required().max(20).min(8)
    })
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>

        <div>
          <Label pointing='right'>username</Label>
          <Input focus
            type='text'
            placeholder='Username...'
            id='username'
            name='username' //in formik you must give name attribute
            value={formik.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.username && formik.errors.username ? formik.errors.username : null}
        </div>
        <div>
          <Label pointing='right'>Password</Label>
          <Input focus
            type='password'
            placeholder='Password...'
            id='password'
            name='password'
            value={formik.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? formik.errors.password : null}
        </div>
        <Button type='submit' secondary >Login</Button>

      </form>
    </div>
  )
}

export default FormikLogin

