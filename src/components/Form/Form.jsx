import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { BiMailSend } from 'react-icons/bi';
import { useAddPostMutation } from '../../redux/commentApi';
import { Loader } from '../Loader/Loader';
import styles from './Form.module.css';

export const Form = () => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  // const [addComment,{isLoading,isSuccess}] = useAddPostMutation();
  const [addComment,{isLoading,isSuccess}] = useAddPostMutation();
  // console.log(one,two);
  

  const onHandleSubmit = (e) => {
    e.preventDefault();

    addComment({author,content})
  };
  useEffect(()=>{
    if (isSuccess) setAuthor("");setContent("");
  },[isSuccess])
  if (isLoading) return <Loader/>
  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={onHandleSubmit}>
        <label className={styles.label}>
          <span className={styles.labelName}>Full name</span>
          <input
            type='text'
            name='name'
            className={styles.input}
            value={author}
            onChange={(e)=>setAuthor(e.target.value)}
          />
        </label>

        <label className={styles.label}>
          <span className={styles.labelName}>Your comment</span>
          <textarea
            className={styles.input}
            name='text'
            rows='5'
            value={content}
            onChange={(e)=>setContent(e.target.value)}
          ></textarea>
        </label>

        <button className={styles.formBtn}>
          {isLoading?<Loader/>:
          (<>
            <BiMailSend className={styles.icon} />
            Send
          </>)}
        </button>
      </form>
    </div>
  );
};
