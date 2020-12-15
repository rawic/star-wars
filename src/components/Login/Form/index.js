import React from 'react';
import { Input, Label, Button, Text } from '@components';

const Form = ({
  values,
  touched,
  errors,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <Label htmlFor="email">Username</Label>
    <Input
      name="email"
      type="text"
      placeholder="Enter your email"
      value={values.email}
      onChange={handleChange}
      onBlur={handleBlur}
      className={errors.email && touched.email && 'error'}
      $fullwidth
    />

    {errors.email && touched.email && <Text $error>{errors.email}</Text>}

    <Label htmlFor="email">Password</Label>
    <Input
      name="password"
      type="password"
      placeholder="Enter your password"
      value={values.password}
      onChange={handleChange}
      onBlur={handleBlur}
      className={errors.password && touched.password && 'error'}
      $fullwidth
    />

    {errors.password && touched.password && (
      <Text $error>{errors.password}</Text>
    )}

    <Button type="submit" disabled={isSubmitting} $login $highlight $submit>
      Login
    </Button>
  </form>
);

export default Form;
