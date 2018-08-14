import React from 'react';

class DataForm extends React.Component {
    handleTitleChange = (e) => {
        const uusinimi = e.target.value;
        this.setState({title: uusinimi});
    };
    handleDescriptChange = (e) => {
        this.setState({descript: e.target.value});
    };
    handleLangChange = (e) => {
        this.setState({lang: e.target.value});
    };
    // handleDateChange = (e) => {
    //     this.setState({date: e.target.value});
    // };
    handleTagsChange = (e) => {
        this.setState({tags: e.target.value});
    };
    // handleScoreChange = (e) => {
    //     this.setState({score: e.target.value});
    // };
    handleCodeChange = (e) => {
        this.setState({code: e.target.value});
    };
    handleAuthorChange = (e) => {
        this.setState({author: e.target.value});
    };
    handleCreateClick = (e) => {
        e.preventDefault();
        this.props.addData(this.state);
        this.setState({title: '', descript: '', lang: '', date: '', tags: '', score: '', code: '', author: ''});
    };
    state = {author: '', quotetext: '', id: ''};

    render() {
        return (
            <form>
                <input type="text" placeholder="Title" value={this.state.title} onChange={this.handleTitleChange}/>
                <input type="text" placeholder="Description" value={this.state.descript}
                       onChange={this.handleDescriptChange}/>
                <input type="text" placeholder="Language" value={this.state.lang} onChange={this.handleLangChange}/>
                {/*<input type="text" placeholder="Date" value={this.state.date} onChange={this.handleDateChange}/>*/}
                <input type="text" placeholder="Tags" value={this.state.tags} onChange={this.handleTagsChange}/>
                {/*<input type="text" placeholder="Score" value={this.state.score} onChange={this.handleScoreChange}/>*/}
                <input type="text" placeholder="Code" value={this.state.code} onChange={this.handleCodeChange}/>
                <input type="text" placeholder="Author" value={this.state.author} onChange={this.handleAuthorChange}/>
                <input type="submit" value="Create" onClick={this.handleCreateClick}/>
            </form>
        );
    }
}

export default DataForm;