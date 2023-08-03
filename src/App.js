import BlogItem from './Components/BlogItem';
import BlogList from './Components/BogList';
import Form from './Components/Form';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
    const postList = useSelector((state) => state.blogs.postList);
    console.log(postList);
    return (
        <div className="app">
            <Form />
            <BlogList>
                {postList.map((post) => (
                    <BlogItem data={post} key={post.id} />
                ))}
            </BlogList>
        </div>
    );
}

export default App;
