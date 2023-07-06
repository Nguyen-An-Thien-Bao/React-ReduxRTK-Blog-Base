import classNames from 'classnames/bind';
import style from './BlogItem.module.scss';

const cx = classNames.bind(style);

function BlogItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('img')} src={data.featuredImage} alt="" />
            <div className={cx('info')}>
                <span>{data.id}</span>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <div>
                    <button className={cx('btn')}>Edit</button>
                    <button className={cx('btn')}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default BlogItem;
