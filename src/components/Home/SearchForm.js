import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Translate} from "react-localize-redux";

class SearchForm extends Component {
    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div className="container-fluid">
                    <label className="pr-2"><Translate id="home.search">
                        Search
                    </Translate>:</label>
                    <Field name="searchField" component="input" type="text"/>
                    <button className="btn btn-dark">
                        <Translate id="home.search">
                            Search
                        </Translate>
                    </button>
                </div>
            </form>
        );
    }
}

// Decorate the form component
SearchForm = reduxForm({
    form: 'search' // a unique name for this form
})(SearchForm);

export default SearchForm;