"use client"
import React, { useState } from 'react';




interface Comments {
  id: string;
  authore: string;
  text: string;
}

interface CommentProps {
  postId: string;
}

const Comment = ({  }: CommentProps) => {
  const [comment, setComment] = useState<Comments[]>([]);
  const [newComment, setNewComment] = useState("");
  const [authoreName, setAuthoreName] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  const handleAddComment = () => {
    if (newComment.trim() && authoreName.trim()) {
      const newcommentObj: Comments = {
        id: new Date().toISOString(),
        authore: authoreName,
        text: newComment,
      };
      setComment([...comment, newcommentObj]);
      setNewComment('');
      setAuthoreName('');
    }
  };

  const handleEditComment = (commentID: string) => {
    const commentToEdit = comment.find((item) => item.id === commentID);
    if (commentToEdit) {
      setNewComment(commentToEdit.text);
      setAuthoreName(commentToEdit.authore);
      setEditingCommentId(commentID);
    }
  };

  const handleSaveEditComment = () => {
    if (newComment.trim() && authoreName.trim() && editingCommentId) {
      const updatedComment = comment.map((coment) =>
        coment.id === editingCommentId ? { ...coment, text: newComment, authore: authoreName } : coment
      );

      setComment(updatedComment);
      setNewComment('');
      setAuthoreName('');
      setEditingCommentId(null);
    }
  };

  const handleDeleteComment = (commentID: string) => {
    const filteredComments = comment.filter((coment) => coment.id !== commentID);
    setComment(filteredComments);
  };

  return (
    <div className='wrapper bg-gradient-to-r from-[#55175781] my-10 to-[#833b8a9c] p-6 rounded-md border-y-4 border-[#551757] border-x-4 border-x-[#804691]'>
      <h2 className='text-xl md:text-4xl text-center text-[#551757]'>Comments</h2>

      <div className='wrapper mt-4 space-y-4 bg-gray-100 p-4 rounded-md w-full h-auto'>
        {comment.length > 0 ? (
          comment.map((coment) => (
            <div key={coment.id}>
              <div className='flex flex-col gap-2 border-2 p-4 md:flex-row md:justify-between md:items-center'>
                <div>
                  <div className='text-xl font-bold'>{coment.authore}</div>
                  <p className='text-lg'>{coment.text}</p>
                </div>
                <div className='flex gap-4 mt-4 md:mt-0'>
                  <button
                    onClick={() => handleEditComment(coment.id)}
                    className='text-lg py-2 px-4 bg-[#551757] text-white rounded-lg'
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteComment(coment.id)}
                    className='text-lg py-2 px-4 bg-red-400 text-white rounded-lg'
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className='font-serif'>No comments yet</p>
        )}
      </div>

      <div className='mt-4 flex flex-col gap-4'>
        <input
          type="text"
          placeholder="Enter Name"
          value={authoreName}
          onChange={(e) => setAuthoreName(e.target.value)}
          className='w-full h-[50px] rounded-md font-serif p-4'
          required
        />
        <input
          type="text"
          placeholder="Add a Comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className='w-full h-[50px] rounded-md font-serif p-4'
          required
        />
        <button
          onClick={editingCommentId ? handleSaveEditComment : handleAddComment}
          className='w-[200px] h-[50px] bg-[#551757] text-white rounded-lg'
        >
          {editingCommentId ? 'Save' : 'Add Comment'}
        </button>
      </div>
    </div>
  );
};

export default Comment;