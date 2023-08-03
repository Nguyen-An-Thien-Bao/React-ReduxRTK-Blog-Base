import classNames from 'classnames/bind';
import style from './BlogItem.module.scss';
import { useDispatch } from 'react-redux';
import { delPost, editPost } from '../BogList/blogReducer';

const cx = classNames.bind(style);

function BlogItem({ data }) {
    const dispatch = useDispatch();

    const handleDelPost = (id) => {
        dispatch(delPost(id));
    };

    const handleStartEditPost = (id) => {
        dispatch(editPost(id));
    };

    return (
        <div className={cx('wrapper')}>
            <img className={cx('img')} src={data.featuredImage} alt="" />
            <div className={cx('info')}>
                <span>{data.publishDate}</span>
                <h2 className={cx('title')}>{data.title}</h2>
                <p>{data.description}</p>
                <div>
                    <button className={cx('btn')} onClick={() => handleStartEditPost(data.id)}>
                        Edit
                    </button>
                    <button className={cx('btn')} onClick={() => handleDelPost(data.id)}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BlogItem;
