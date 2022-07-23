import React from 'react';
import styles from '../styles/SignUp.module.css';
import Head from 'next/head';
import {useForm} from "react-hook-form";

const Signup = () => {

  const {register, handleSubmit, formState:{errors}} = useForm();
  const onSubmit = data => console.log(data);

  const onclickSubmit = () => {
    console.log("clicked!")
   alert("Enjoy your trial pack.")
  }
  return (
    <div>
    <Head>
      <title>Sign Up Form</title>
    </Head>

    <div className={styles.main}>
      <div className={styles.main__left}>
        <h2>Learn to code by watching others</h2>
        <p>See how experienced developers solve problems in 
        real-time. Watching scripted tutorials is great,
        but understanding how developers think is invaluable.</p>
      </div>
      <div className={styles.main__right}>
        <div className={styles.main__right__top}>
          <p><span>Try it free 7 days</span> then $20/mo. thereafter</p>
        </div>

        {/* form part */}
        <div className={styles.main__form}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.main__right__form}>
          
          <input type="text" placeholder="First Name" {...register("firstName", { required: true,
           maxLength: {value: 20} })}  />   
         <span className={styles.form__errors}>{errors.firstName?.type === "required" 
         ||errors.firstName?.type === "maxLength" && 'Enter the First Name correctly!'}</span> 

    
           <input type="text" placeholder="Last Name" {...register("lastName", {required:true, 
          maxLength: {value: 20} })} />
           <span className={styles.form__errors}>{errors.lastName?.type === "required" 
         ||errors.lastName?.type === "maxLength" && 'Enter the Last Name correctly!'}</span> 

          <input type="email" placeholder="Email Address" {...register("email", {required:true, 
          pattern:{value:/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/}})} />
          <span className={styles.form__errors}>{errors.email?.type === "required" 
         ||errors.email?.type === "pattern" && 'Enter the email correctly!'}</span> 

          <input type="password" placeholder="Password" {...register("password",{requird:true,
           minLength:{value:6}})} />
             <span className={styles.form__errors}>{errors.password?.type === "required" 
         ||errors.password?.type === "minLength" && 'Enter the password correctly!'}</span> 

          <button className={styles.button} type="submit" onClick={onclickSubmit}>CLAIM YOUR FREE TRIAL</button>
          <p className={styles.terms}>By clicking the button you are agreeing to our 
          <span> Terms and Services</span></p>
        </form>
        </div>
      </div>
    </div>
    </div>
  )
  };

  export default Signup;

