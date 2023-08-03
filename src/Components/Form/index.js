import { useEffect, useState } from 'react';
import './Form.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, cancelEditingMode, finishedEditing } from '../BogList/blogReducer';

const initPostData = {
    description: '',
    featuredImage: '',
    publishDate: '',
    published: '',
    title: '',
};

function Form() {
    const editPost = useSelector((state) => state.blogs.editPost);
    const [form, setForm] = useState(initPostData);
    const dispatch = useDispatch();

    useEffect(() => {
        setForm(editPost ? editPost : initPostData);
    }, [editPost]);

    const handleAddPost = () => {
        if (editPost) {
            dispatch(finishedEditing(form));
        } else {
            const officialPost = { ...form, id: new Date().toISOString() };
            dispatch(addPost(officialPost));
        }
        setForm(initPostData);
    };

    const handleCancelEditingMode = () => {
        dispatch(cancelEditingMode());
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className={'inp-container'}>
                <label htmlFor="title">title</label>
                <input
                    id="title"
                    placeholder="title"
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    value={form.title}
                />
            </div>
            <div className={'inp-container'}>
                <label htmlFor="Featured">Featured Image</label>
                <input
                    id="Featured"
                    placeholder="URL image"
                    onChange={(e) => setForm({ ...form, featuredImage: e.target.value })}
                    value={form.featuredImage}
                />
            </div>
            <div className={'inp-container'}>
                <label htmlFor="description">Description</label>
                <textarea
                    style={{ resize: 'none' }}
                    id="description"
                    placeholder="your description"
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    value={form.description}
                ></textarea>
            </div>
            <div className={'inp-container'}>
                <label htmlFor="date">Publish Date</label>
                <input
                    id="date"
                    type="datetime-local"
                    onChange={(e) => setForm({ ...form, publishDate: e.target.value })}
                    value={form.publishDate}
                />
            </div>
            <div className={'inp-container'}>
                <label htmlFor="publishCheck">Publish</label>
                <input
                    id="publishCheck"
                    type="checkBox"
                    checked={form.published}
                    onChange={(e) => setForm({ ...form, published: e.target.checked })}
                />
            </div>
            <div>
                {!editPost ? (
                    <button onClick={handleAddPost}>Publish Post</button>
                ) : (
                    <>
                        <button onClick={handleAddPost}>Update Post</button>
                        <button onClick={handleCancelEditingMode}>Cancel</button>
                    </>
                )}
            </div>
        </form>
    );
}

export default Form;
