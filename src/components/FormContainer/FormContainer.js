import React, { Component } from 'react';
import { navigate } from 'gatsby';
import { FormWrapper } from './formcontainer.css';

export default class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    let context = { ...this.state };
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: {
        'form-name': form.getAttribute('name'),
        ...this.state,
      },
    })
      .then(() => navigate(form.getAttribute('action'), { state: context }))
      .catch(error => alert(error));
  }

  render() {
    return (
      <FormWrapper>
        <div className="formheader">
          <h2>Got a question?</h2>
          <h3>Get in touch.</h3>
        </div>
        <form
          name="contact"
          method="post"
          action="/thanks"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label htmlFor="bot-field">
              Don’t fill this out:{' '}
              <input
                id="bot-field"
                name="bot-field"
                onChange={this.handleChange}
              />
            </label>
          </p>
          <div className="form-field">
            <label htmlFor="name">
              name
              <br />
              <input
                id="name"
                type="text"
                name="name"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="form-field">
            <label htmlFor="email">
              email
              <br />
              <input
                id="email"
                type="email"
                name="email"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="form-field">
            <label htmlFor="message">
              message
              <br />
              <textarea
                id="message"
                name="message"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="form-field submit">
            <button type="submit">Send</button>
          </div>
        </form>
      </FormWrapper>
    );
  }
}
