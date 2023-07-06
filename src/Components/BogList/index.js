import classNames from 'classnames/bind';
import styles from './BlogList.module.scss';

const cx = classNames.bind(styles);

function BlogList({ children }) {
    return (
        <div className={cx('wrapper')}>
            <h1>Blogs</h1>
            <p>Đừng bao giờ từ bỏ. Hôm nay khó khăn, ngày mai sẽ trở nên tồi tệ. Nhưng ngày mốt sẽ có nắng</p>
            <div className={cx('blogList-container')}>{children}</div>
        </div>
    );
}

export default BlogList;
