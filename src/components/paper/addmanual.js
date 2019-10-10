import React, { Component } from 'react';
import { withRouter} from "react-router";
const axios = require('axios');

class AddManual extends Component {
    constructor(props) {
        super(props)
        this.state = {
            papertitle: '',
            authors: "",
            year: "",
            source: "",
            publisher: "",
            volume: "",
            number: "",
            pages: "",
            link: "",
            noOfLikes: "0"
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { papertitle, authors, year, source, publisher, volume, number, pages, link, noOfLikes } = this.state;

        axios.post('http://localhost:8080/paper/addmanual', { papertitle, authors, year, source, publisher, volume, number, pages, link, noOfLikes })
            .then((result) => {
            });
            this.props.history.push('/paper');
    }

    addAuthorArray = () => {
        this.setState(state => {
          const authors = [...state.authors, state.value];
        });
      };

    render() {
        const {papertitle, authors, year, source, publisher, volume, number, pages, link, noOfLikes} = this.state;
        return (
            <div>
                <h1>Add Paper Manually</h1>
                <form onSubmit={this.onSubmit} action="/paper">
                    <div class="form-group">
                        <label for="papertitle">Title</label>
                        <input type="text" value={papertitle} onChange={this.onChange} class="form-control" id="papertitle" placeholder="Paper Title"></input>
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <label for="author">Author</label>
                            <input type="text" value={authors} onChange={this.addAuthorArray} class="form-control" id="authors" placeholder="Author"></input>
                        </div>
                        <div class="col-1">
                            <label for="addauthor">Add Author</label>
                            <input onClick={(e) => this.addAuthor(e)} type="button" id="addauthor" name="addauthor" class="btn btn-success" value="+"></input>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-7">
                            <label for="source">Source</label>
                            <input type="text" value={source} onChange={this.onChange} class="form-control" id="source" placeholder="Source"></input>
                        </div>
                        <div class="col">
                            <label for="year">Year</label>
                            <input type="text" value={year} onChange={this.onChange} class="form-control" id="year" placeholder="Year"></input>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <label for="volume">Volume</label>
                            <input type="text" value={volume} onChange={this.onChange} class="form-control" id="volume" placeholder="Volume"></input>
                        </div>
                        <div class="col">
                            <label for="number">Number</label>
                            <input type="text" value={number} onChange={this.onChange} class="form-control" id="number" placeholder="Number"></input>
                        </div>
                        <div class="col">
                            <label for="pages">Pages</label>
                            <input type="text" value={pages} onChange={this.onChange} class="form-control" id="pages" placeholder="Pages"></input>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="link">Link</label>
                        <input type="text" value={link} onChange={this.onChange} class="form-control" id="link" placeholder="Link"></input>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>

        );
    }
}

export default AddManual;