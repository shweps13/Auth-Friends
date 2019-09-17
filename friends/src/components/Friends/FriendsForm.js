import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from 'semantic-ui-react'
import { axiosWithAuth } from '../../utilites/axiosWithAuth';

const FriendsForm = ({ errors, touched, status }) => {
    const [friends, setFriends] = useState([]);
    console.log('Here is the form things: ', friends)   
    useEffect(() => {
        if (status) {
            setFriends([...friends, status]);
          }
        }, [status]);
  
    return (
        <div className="FriendsForm">
            <h2>Add a Friend</h2>
            <Form>
                <Field type="text" name="name" placeholder="Name" />
                {touched.name && errors.name && (
                    <p className="error">{errors.name}</p>
                )}
        
                <Field type="number" name="age" placeholder="Age" />
                {touched.age && errors.age && <p className="error">{errors.age}</p>}

                <Field type="email" name="email" placeholder="Email" />
                {touched.email && errors.email && <p className="error">{errors.email}</p>}

                <Button primary type="submit">Submit!</Button>
            </Form>
        </div>

    );
  };
  
  const FormikUserForm = withFormik({

    mapPropsToValues({ name, age, email }) {
      return {
        name: name || '',
        age: age || '',
        email: email || '',
      };
    },
  
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Please enter name'),
      age: Yup.string().required('Please enter age'),
      email: Yup.string().required('Please enter email'),
    }),
  
    handleSubmit(values, { setStatus }) {
        

        axiosWithAuth()
        .post('/friends', values)
        .then(res => {
          setStatus(values);
          console.log("Form sent succesfully!", res);
        })
        .catch(err => console.log(err));
        
    }
  })(FriendsForm);
  
  export default FormikUserForm;