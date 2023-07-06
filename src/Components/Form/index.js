import './Form.scss';

function Form() {
    return (
        <form>
            <div className={'inp-container'}>
                <label htmlFor="title">title</label>
                <input id="title" placeholder="title" />
            </div>
            <div className={'inp-container'}>
                <label htmlFor="Featured">Featured Image</label>
                <input id="Featured" placeholder="URL image" />
            </div>
            <div className={'inp-container'}>
                <label htmlFor="description">Description</label>
                <textarea style={{ resize: 'none' }} id="description" placeholder="your description"></textarea>
            </div>
            <div className={'inp-container'}>
                <label htmlFor="date">Publish Date</label>
                <input id="date" type="date" />
            </div>
            <div className={'inp-container'}>
                <label htmlFor="publishCheck">Publish</label>
                <input id="publishCheck" type="checkBox" />
            </div>
            <div>
                <button>Publish Post</button>
                <button>Update Post</button>
                <button>Cancel</button>
            </div>
        </form>
    );
}

export default Form;
