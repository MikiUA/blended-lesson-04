import React from 'react'
import { useDeleteCommentMutation } from '../../redux/commentApi'

export default function DeleteCommentButton({id}) {
    const [deleteComment,] = useDeleteCommentMutation();
  return (
    <button onClick={()=>deleteComment({id})}>DeleteCommentButton</button>
  )
}
