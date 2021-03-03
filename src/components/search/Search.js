import React, {Component} from 'react';
import {TextField, SelectField, MenuItem} from 'material-ui';
import axios from 'axios';
import ImageResult from "../image-result/ImageResult";

class Search extends Component {
    state = {
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api',
        apiKey: '16671798-01f55fad2301ad3f652388cef',
        images: []
    };

    onTextChange = (e, value) => {
        this.setState({searchText: value}, () => {
            if (value===''){
                this.setState({images:[]});
            }else {
            axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
                .then(res => this.setState({images: res.data.hits}))
                .catch(err => console.log(err));
            }
        });
    };

    onAmountChange = (e, index, value) => {
        this.setState({amount: value});
    }

    render() {
        console.log(this.state.images);
        return (
            <div>
                <TextField
                    name="SearchText"
                    floatingLabelText="Search For Images"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    fullWidth={true}
                />
                <br/>
                <SelectField
                    name="amount"
                    floatingLabelText="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                >
                    <MenuItem value={5} primaryText="5"/>
                    <MenuItem value={10} primaryText="10"/>
                    <MenuItem value={15} primaryText="15"/>
                    <MenuItem value={20} primaryText="20"/>
                    <MenuItem value={30} primaryText="30"/>
                    <MenuItem value={50} primaryText="50"/>

                </SelectField>
                <br/>
                {this.state.images.length > 0 ? (<ImageResult images={this.state.images}/>) : null}
            </div>
        );
    }
}

export default Search;
