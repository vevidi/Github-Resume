import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { getBaseInfoTC } from '../../store/base-info';

const Home = ({history}) => {
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    dispatch(getBaseInfoTC(data.username))
    history.push(`/${data.username}`)
  };

  return (
    <div className="container">
      <h2>Enter your GitHub username</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username", { required: true })} />
        {errors.username && <span>This field is required</span>}

        <button className="button" type="submit">Generate</button>
      </form>
    </div>
  )
}

export default Home;
